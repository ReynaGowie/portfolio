import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    author: z.string().default('Reyna Gowie'),
    // Omit until Reyna picks a real publication date. Never backfill.
    pubDate: z.coerce.date().optional(),
    topic: z.string().min(1),
    order: z.number().int(),
    // outline: Reyna hasn't written it yet (hidden from production builds)
    // draft:   Reyna is writing it
    // review:  full text exists, awaiting Reyna's final approval
    // final:   approved for submission
    status: z.enum(['outline', 'draft', 'review', 'final']),
    image: z.object({
      src: z.string().min(1),
      alt: z.string().min(1),
      caption: z.string().min(1),
      creator: z.string().min(1),
      sourceUrl: z.string().min(1),
      license: z.string().min(1),
      placeholder: z.boolean().default(false),
      approved: z.boolean().default(false),
    }),
    sources: z
      .array(
        z.object({
          publisher: z.string(),
          title: z.string(),
          url: z.url(),
          date: z.string(),
          claim: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { blog };
