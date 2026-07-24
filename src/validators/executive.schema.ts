import { z } from 'zod';

export const CreateExecutiveMetricSchema = z.object({
  workspaceId: z.string(),
  key: z.string(),
  value: z.number(),
  trend: z.enum(['UP', 'DOWN', 'FLAT']),
  trendValue: z.number().optional(),
  label: z.string()
});
export type CreateExecutiveMetricPayload = z.infer<typeof CreateExecutiveMetricSchema>;

export const CreateHealthSnapshotSchema = z.object({
  workspaceId: z.string(),
  score: z.number(),
  status: z.enum(['HEALTHY', 'DEGRADED', 'CRITICAL']),
  details: z.string().optional()
});
export type CreateHealthSnapshotPayload = z.infer<typeof CreateHealthSnapshotSchema>;
