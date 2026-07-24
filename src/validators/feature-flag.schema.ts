import { z } from 'zod';

export const CreateFeatureFlagSchema = z.object({
  key: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  state: z.enum(['ENABLED', 'DISABLED', 'BETA', 'PREVIEW', 'INTERNAL']),
  workspaceId: z.string().uuid(),
});

export const UpdateFeatureFlagSchema = z.object({
  state: z.enum(['ENABLED', 'DISABLED', 'BETA', 'PREVIEW', 'INTERNAL']).optional(),
  description: z.string().optional(),
});

export type CreateFeatureFlagPayload = z.infer<typeof CreateFeatureFlagSchema>;
export type UpdateFeatureFlagPayload = z.infer<typeof UpdateFeatureFlagSchema>;
