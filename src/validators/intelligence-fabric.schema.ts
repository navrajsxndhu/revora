import { z } from "zod";

export const CreateIntelligenceRelationshipSchema = z.object({
  workspaceId: z.string().uuid(),
  src: z.string(),
  rel: z.string(),
  targ: z.string(),
  dom: z.string(),
  corr: z.string(),
  trace: z.string()
});

export const CreateIntelligenceCorrelationSchema = z.object({
  workspaceId: z.string().uuid(),
  trig: z.string(),
  corr: z.string(),
  conf: z.string(),
  act: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateIntelligenceDependencySchema = z.object({
  workspaceId: z.string().uuid(),
  name: z.string(),
  up: z.string(),
  down: z.string(),
  own: z.string(),
  risk: z.string(),
  trace: z.string()
});

export const CreateIntelligenceContextSchema = z.object({
  workspaceId: z.string().uuid(),
  ass: z.string(),
  fin: z.string(),
  sec: z.string(),
  comp: z.string(),
  state: z.string(),
  trace: z.string()
});

export const CreateIntelligenceImpactSchema = z.object({
  workspaceId: z.string().uuid(),
  prop: z.string(),
  inf: z.string(),
  bus: z.string(),
  risk: z.string(),
  gov: z.string(),
  trace: z.string()
});

export const CreateIntelligenceDecisionSchema = z.object({
  workspaceId: z.string().uuid(),
  dec: z.string(),
  ev: z.string(),
  risk: z.string(),
  fin: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateIntelligenceInsightSchema = z.object({
  workspaceId: z.string().uuid(),
  cat: z.string(),
  sum: z.string(),
  rec: z.string(),
  val: z.string(),
  imp: z.string(),
  trace: z.string()
});

export const CreateIntelligenceAnalyticsSchema = z.object({
  workspaceId: z.string().uuid(),
  dept: z.string(),
  util: z.string(),
  time: z.string(),
  vel: z.string(),
  health: z.string(),
  trace: z.string()
});

export const CreateIntelligenceGovernanceSchema = z.object({
  workspaceId: z.string().uuid(),
  pol: z.string(),
  eng: z.string(),
  rule: z.string(),
  viol: z.string(),
  gov: z.string(),
  trace: z.string()
});

export const CreateIntelligenceEvidenceSchema = z.object({
  workspaceId: z.string().uuid(),
  evidenceId: z.string(),
  time: z.coerce.date(),
  sys: z.string(),
  act: z.string(),
  gov: z.string(),
  trace: z.string()
});
