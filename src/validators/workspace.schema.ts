import { z } from 'zod';

export const CreateWorkspaceSchema = z.object({
  name: z.string().min(2, "Workspace name must be at least 2 characters").max(255),
  organizationId: z.string().uuid(),
});

export const UpdateWorkspaceSchema = z.object({
  name: z.string().min(2).max(255).optional(),
});

export type CreateWorkspacePayload = z.infer<typeof CreateWorkspaceSchema>;
export type UpdateWorkspacePayload = z.infer<typeof UpdateWorkspaceSchema>;
