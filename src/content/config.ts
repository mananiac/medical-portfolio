import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Dr. Drishti Sagar, MD'),
    category: z.enum([
      'Virology',
      'Bacteriology',
      'Immunology',
      'Antimicrobial Resistance',
      'Public Health',
    ]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  articles: articlesCollection,
};
