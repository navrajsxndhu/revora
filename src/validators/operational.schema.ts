import { z } from 'zod';

export const CreateApprovalSchema = z.object({
  workspaceId: z.string().uuid(),
  requestContext: z.string().min(1),
  originatingModule: z.string().min(1),
  justification: z.string().min(1),
  slaDeadline: z.string().min(1),
  urgency: z.enum(['Low', 'Medium', 'High', 'Critical']),
  traceId: z.string().min(1),
});
export type CreateApprovalPayload = z.infer<typeof CreateApprovalSchema>;

export const UpdateApprovalSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(['PENDING', 'APPROVED', 'REJECTED']),
});
export type UpdateApprovalPayload = z.infer<typeof UpdateApprovalSchema>;

export const CreateActivitySchema = z.object({
  workspaceId: z.string().uuid(),
  activityStream: z.string().min(1),
  urgency: z.enum(['Low', 'Medium', 'High', 'Critical']),
  summary: z.string().min(1),
  department: z.string().min(1),
  traceId: z.string().min(1),
});
export type CreateActivityPayload = z.infer<typeof CreateActivitySchema>;

export const CreateTimelineEventSchema = z.object({
  workspaceId: z.string().uuid(),
  eventContext: z.string().min(1),
  initiator: z.string().min(1),
  businessImpact: z.string().min(1),
  traceId: z.string().min(1),
});
export type CreateTimelineEventPayload = z.infer<typeof CreateTimelineEventSchema>;
