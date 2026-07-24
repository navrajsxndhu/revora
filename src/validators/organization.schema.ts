import { z } from 'zod';

export const CreateOrganizationSchema = z.object({
  name: z.string().min(2, "Organization name must be at least 2 characters").max(255),
});

export const UpdateOrganizationSchema = z.object({
  name: z.string().min(2).max(255).optional(),
});

export type CreateOrganizationPayload = z.infer<typeof CreateOrganizationSchema>;
export type UpdateOrganizationPayload = z.infer<typeof UpdateOrganizationSchema>;
