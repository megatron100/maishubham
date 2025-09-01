import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    description: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    date: z.date(),
    draft: z.boolean().default(false)
  }),
});

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    mood: z.string().optional(),
  }),
});

export const collections = {
  posts,
  projects,
  journal,
};
