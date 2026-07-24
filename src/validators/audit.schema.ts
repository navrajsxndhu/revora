import { z } from 'zod';

export const CreateAuditEventSchema = z.object({
  workspaceId: z.string().uuid(),
  actor: z.string(),
  eventType: z.string(),
  message: z.string(),
});

export type CreateAuditEventPayload = z.infer<typeof CreateAuditEventSchema>;
