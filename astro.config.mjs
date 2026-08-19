// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	// This is a GitHub user site, so it is served at the domain root.
	site: 'https://papathanasiouioannis.github.io',
	trailingSlash: 'always',
	integrations: [sitemap()],
	image: {
		layout: 'constrained',
		responsiveStyles: true,
	},
});
