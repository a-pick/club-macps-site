import { z, defineCollection } from 'astro:content';

const welcomeCollection = defineCollection({
    type: 'content',
    schema: z.object({
        pageTitle: z.string(),
        headerTitle: z.string().optional(),
        tags: z.string().optional(),
        image: z.string().optional(),
    }),
});

export const collections = {
  'welcome_page': welcomeCollection,
};