import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(projectRoot, 'dist');
const failures = [];

const fail = (file, message) => failures.push(`${path.relative(projectRoot, file)}: ${message}`);
const matches = (text, pattern) => [...text.matchAll(pattern)];

async function walk(directory) {
	const entries = await readdir(directory, { withFileTypes: true });
	const files = await Promise.all(
		entries.map((entry) => {
			const target = path.join(directory, entry.name);
			return entry.isDirectory() ? walk(target) : target;
		}),
	);
	return files.flat();
}

async function targetExists(target) {
	try {
		await access(target);
		return true;
	} catch {
		return false;
	}
}

function localTarget(urlPath) {
	const cleanPath = decodeURIComponent(urlPath.split(/[?#]/, 1)[0]);
	if (cleanPath === '/') return path.join(distRoot, 'index.html');
	const relative = cleanPath.replace(/^\//, '');
	return cleanPath.endsWith('/')
		? path.join(distRoot, relative, 'index.html')
		: path.join(distRoot, relative);
}

const files = await walk(distRoot);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const seen = { title: new Map(), description: new Map(), canonical: new Map() };

for (const file of htmlFiles) {
	const html = await readFile(file, 'utf8');

	for (const [label, pattern] of [
		['title', /<title>([^<]+)<\/title>/gi],
		['description', /<meta\s+name="description"\s+content="([^"]+)"\s*\/?>/gi],
		['canonical', /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/?>/gi],
	]) {
		const values = matches(html, pattern);
		const expectedCount = label === 'canonical' && path.basename(file) === '404.html' ? 0 : 1;
		if (values.length !== expectedCount) {
			fail(file, `expected ${expectedCount} ${label}, found ${values.length}`);
			continue;
		}
		if (expectedCount === 0) continue;
		const value = values[0][1];
		const previous = seen[label].get(value);
		if (previous) fail(file, `${label} duplicates ${path.relative(projectRoot, previous)}`);
		seen[label].set(value, file);
	}

	const headings = matches(html, /<h1\b[^>]*>/gi);
	if (headings.length !== 1) fail(file, `expected one h1, found ${headings.length}`);

	for (const script of matches(html, /<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
		if (!/type="application\/ld\+json"/i.test(script[1])) {
			fail(file, 'contains client-side script outside JSON-LD');
			continue;
		}
		try {
			JSON.parse(script[2]);
		} catch (error) {
			fail(file, `invalid JSON-LD: ${error.message}`);
		}
	}

	for (const image of matches(html, /<img\b[^>]*>/gi)) {
		for (const attribute of ['alt', 'width', 'height']) {
			if (!new RegExp(`\\s${attribute}="[^"]*"`, 'i').test(image[0])) {
				fail(file, `image missing ${attribute}`);
			}
		}
	}

	const figureCount = matches(html, /<figure\b/gi).length;
	const captionCount = matches(html, /<figcaption\b/gi).length;
	if (figureCount !== captionCount) {
		fail(file, `found ${figureCount} figures but ${captionCount} captions`);
	}
	if (/<\/a>[,;:]<a\b/i.test(html)) {
		fail(file, 'adjacent inline links are missing visible whitespace');
	}

	for (const anchor of matches(html, /<a\b[^>]*\shref="([^"]+)"[^>]*>/gi)) {
		const href = anchor[1];
		if (!href.startsWith('/') || href.startsWith('//')) continue;
		if (!(await targetExists(localTarget(href)))) fail(file, `broken internal link ${href}`);
	}

	for (const forbidden of [
		/[a-z]:[\\/]Users[\\/]/i,
		/[\\/]Downloads[\\/]/i,
		/\bfile:\/\//i,
		/@[a-z0-9.-]*auth\.gr\b/i,
		/\b(?:main|introduction)\.tex\b/i,
	]) {
		if (forbidden.test(html)) fail(file, `contains forbidden private-source pattern ${forbidden}`);
	}
}

const home = await readFile(path.join(distRoot, 'index.html'), 'utf8');
if (!home.includes('giannis.papathanasiou.pth@gmail.com')) {
	fail(path.join(distRoot, 'index.html'), 'permanent contact email is missing');
}

if (failures.length) {
	console.error(failures.join('\n'));
	process.exitCode = 1;
} else {
	console.log(`Validated ${htmlFiles.length} HTML files: metadata, JSON-LD, images, links, and privacy checks passed.`);
}
