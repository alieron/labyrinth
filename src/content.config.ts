import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content' }),
  schema: z.object({
    tags: z.array(z.string()).nullable().transform((value) => value ?? []).default([]),
    complete: z.boolean().nullable().transform((value) => value ?? false).default(false),
    prev: z.string().optional(),
    next: z.string().optional(),
  })
});

export const collections = { notes };