import { z } from 'zod';

export const Writeschema = z.object({
  category: z.enum(['share-plan', 'place-review', 'boast-my-coco']),
  title: z.string().min(2).max(20),
  content: z.string().min(10).max(300),
  imageData: z.string().optional(),
});
