import { z } from 'zod';

export const TodoFormSchema = z.object({
  title: z.string().min(2, 'the title must have 2 characters').max(200, 'title is too long'),
});

export type TodoFormSchemaType = z.infer<typeof TodoFormSchema>;
