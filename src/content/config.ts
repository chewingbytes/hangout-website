import { defineCollection, z } from 'astro:content';

const communities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Gaming', 'Sports', 'Hobbies', 'Study', 'Chill', 'Tech']),
    icon: z.string(), // Emoji or Lucide icon name
    memberCount: z.string(),
    vibe: z.string(), // e.g. "Sweaty", "Chill", "Chaos"
    tags: z.array(z.string()),
    color: z.string().default('bg-neo-white'),
  }),
});

export const collections = {
  communities,
};
