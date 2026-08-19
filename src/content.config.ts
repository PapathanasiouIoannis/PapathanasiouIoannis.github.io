import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const linkSchema = z.object({
	label: z.string(),
	href: z.url(),
});

const work = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
	schema: z.object({
		title: z.string(),
		shortTitle: z.string(),
		description: z.string(),
		eyebrow: z.string(),
		status: z.string(),
		period: z.string(),
		order: z.number().int().positive(),
		featured: z.boolean().default(false),
		kind: z.enum(['research', 'thesis', 'software']),
		tags: z.array(z.string()),
		links: z.array(linkSchema),
	}),
});

export const collections = { work };
