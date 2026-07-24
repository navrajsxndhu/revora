import { z } from 'zod';

export const CreateObservabilityTelemetrySchema = z.object({
  workspaceId: z.string(),
  source: z.string(),
  type: z.string(),
  volume: z.string(),
  domain: z.string(),
  state: z.string(),
  trace: z.string()
});
export type CreateObservabilityTelemetryPayload = z.infer<typeof CreateObservabilityTelemetrySchema>;

export const CreateObservabilityServiceSchema = z.object({
  workspaceId: z.string(),
  service: z.string(),
  tier: z.string(),
  availability: z.string(),
  latency: z.string(),
  health: z.string(),
  trace: z.string()
});
export type CreateObservabilityServicePayload = z.infer<typeof CreateObservabilityServiceSchema>;

export const CreateObservabilityIncidentSchema = z.object({
  workspaceId: z.string(),
  incidentId: z.string(),
  service: z.string(),
  commander: z.string(),
  timeToResolve: z.string(),
  severity: z.string(),
  trace: z.string()
});
export type CreateObservabilityIncidentPayload = z.infer<typeof CreateObservabilityIncidentSchema>;

export const CreateObservabilityReliabilitySchema = z.object({
  workspaceId: z.string(),
  objective: z.string(),
  target: z.string(),
  value: z.string(),
  budget: z.string(),
  status: z.string(),
  trace: z.string()
});
export type CreateObservabilityReliabilityPayload = z.infer<typeof CreateObservabilityReliabilitySchema>;

export const CreateObservabilityCapacitySchema = z.object({
  workspaceId: z.string(),
  pool: z.string(),
  load: z.string(),
  velocity: z.string(),
  outageTime: z.string(),
  health: z.string(),
  trace: z.string()
});
export type CreateObservabilityCapacityPayload = z.infer<typeof CreateObservabilityCapacitySchema>;

export const CreateObservabilityDependencySchema = z.object({
  workspaceId: z.string(),
  origin: z.string(),
  target: z.string(),
  type: z.string(),
  impact: z.string(),
  state: z.string(),
  trace: z.string()
});
export type CreateObservabilityDependencyPayload = z.infer<typeof CreateObservabilityDependencySchema>;

export const CreateObservabilityAnalyticsSchema = z.object({
  workspaceId: z.string(),
  domain: z.string(),
  sla: z.string(),
  alerts: z.string(),
  trend: z.string(),
  state: z.string(),
  trace: z.string()
});
export type CreateObservabilityAnalyticsPayload = z.infer<typeof CreateObservabilityAnalyticsSchema>;

export const CreateObservabilityResilienceSchema = z.object({
  workspaceId: z.string(),
  scenario: z.string(),
  target: z.string(),
  failureType: z.string(),
  resolution: z.string(),
  condition: z.string(),
  trace: z.string()
});
export type CreateObservabilityResiliencePayload = z.infer<typeof CreateObservabilityResilienceSchema>;

export const CreateObservabilityGovernanceSchema = z.object({
  workspaceId: z.string(),
  rule: z.string(),
  domain: z.string(),
  enforcement: z.string(),
  blockedCount: z.string(),
  governance: z.string(),
  trace: z.string()
});
export type CreateObservabilityGovernancePayload = z.infer<typeof CreateObservabilityGovernanceSchema>;

export const CreateObservabilityEvidenceSchema = z.object({
  workspaceId: z.string(),
  evidenceId: z.string(),
  time: z.coerce.date(),
  actor: z.string(),
  action: z.string(),
  governance: z.string(),
  trace: z.string()
});
export type CreateObservabilityEvidencePayload = z.infer<typeof CreateObservabilityEvidenceSchema>;
