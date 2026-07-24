import { z } from 'zod';

export const CreateKnowledgeNodeSchema = z.object({
  workspaceId: z.string(),
  type: z.string(),
  nodeId: z.string(),
  connections: z.number().int().default(0),
  owner: z.string(),
  governance: z.string(),
  trace: z.string()
});
export type CreateKnowledgeNodePayload = z.infer<typeof CreateKnowledgeNodeSchema>;

export const CreateSearchQuerySchema = z.object({
  workspaceId: z.string(),
  query: z.string(),
  intent: z.string().optional(),
  category: z.string().optional(),
  matchScore: z.string().optional(),
  confidence: z.string().optional(),
  action: z.string().optional(),
  module: z.string().optional(),
  rbac: z.string().optional(),
  trace: z.string()
});
export type CreateSearchQueryPayload = z.infer<typeof CreateSearchQuerySchema>;

export const CreateSearchCollectionSchema = z.object({
  workspaceId: z.string(),
  name: z.string(),
  owner: z.string(),
  queryCount: z.string(),
  access: z.string(),
  governance: z.string(),
  trace: z.string()
});
export type CreateSearchCollectionPayload = z.infer<typeof CreateSearchCollectionSchema>;

export const CreateSearchAnalyticsSchema = z.object({
  workspaceId: z.string(),
  metric: z.string(),
  value: z.string(),
  trend: z.string(),
  driver: z.string(),
  status: z.string(),
  trace: z.string()
});
export type CreateSearchAnalyticsPayload = z.infer<typeof CreateSearchAnalyticsSchema>;

export const CreateSearchContextSchema = z.object({
  workspaceId: z.string(),
  context: z.string(),
  filters: z.string(),
  modifiers: z.string(),
  hidden: z.string(),
  status: z.string(),
  trace: z.string()
});
export type CreateSearchContextPayload = z.infer<typeof CreateSearchContextSchema>;

export const CreateSearchEvidenceSchema = z.object({
  workspaceId: z.string(),
  evidenceId: z.string(),
  time: z.coerce.date(),
  actor: z.string(),
  action: z.string(),
  governance: z.string(),
  trace: z.string()
});
export type CreateSearchEvidencePayload = z.infer<typeof CreateSearchEvidenceSchema>;

export const CreateSearchExplorerSchema = z.object({
  workspaceId: z.string(),
  facet: z.string(),
  subFacet: z.string(),
  assets: z.string(),
  updated: z.string(),
  governance: z.string(),
  trace: z.string()
});
export type CreateSearchExplorerPayload = z.infer<typeof CreateSearchExplorerSchema>;

export const CreateSearchGovernanceSchema = z.object({
  workspaceId: z.string(),
  policy: z.string(),
  target: z.string(),
  restriction: z.string(),
  authority: z.string(),
  status: z.string(),
  trace: z.string()
});
export type CreateSearchGovernancePayload = z.infer<typeof CreateSearchGovernanceSchema>;

export const CreateSearchRecommendationSchema = z.object({
  workspaceId: z.string(),
  source: z.string(),
  recommendation: z.string(),
  vector: z.string(),
  value: z.string(),
  confidence: z.string(),
  trace: z.string()
});
export type CreateSearchRecommendationPayload = z.infer<typeof CreateSearchRecommendationSchema>;
