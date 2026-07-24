import { z } from 'zod';

export const ScheduleJobSchema = z.object({
  workspaceId: z.string().uuid(),
  jobName: z.string().min(1),
  queueName: z.string().min(1),
  payload: z.any().optional(),
});

export type ScheduleJobPayload = z.infer<typeof ScheduleJobSchema>;
