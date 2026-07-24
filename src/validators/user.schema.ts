import { z } from 'zod';

export const UpdateUserSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  email: z.string().email().optional(),
  // Add other standard fields as needed
});

export type UpdateUserPayload = z.infer<typeof UpdateUserSchema>;
