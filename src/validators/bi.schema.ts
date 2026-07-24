import { z } from "zod";

export const CreateBiAnalyticsSchema = z.object({
  workspaceId: z.string().uuid(),
  cap: z.string(),
  adopt: z.string(),
  imp: z.string(),
  time: z.string(),
  state: z.string(),
  trace: z.string()
});

export const CreateBiBalancedScorecardSchema = z.object({
  workspaceId: z.string().uuid(),
  per: z.string(),
  ind: z.string(),
  cur: z.string(),
  tar: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateBiDecisionSchema = z.object({
  workspaceId: z.string().uuid(),
  dec: z.string(),
  req: z.string(),
  imp: z.string(),
  risk: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateBiEvidenceSchema = z.object({
  workspaceId: z.string().uuid(),
  evidenceId: z.string(),
  time: z.coerce.date(),
  act: z.string(),
  acti: z.string(),
  gov: z.string(),
  trace: z.string()
});

export const CreateBiForecastingSchema = z.object({
  workspaceId: z.string().uuid(),
  mod: z.string(),
  targ: z.string(),
  cur: z.string(),
  next: z.string(),
  conf: z.string(),
  trace: z.string()
});

export const CreateBiGovernanceSchema = z.object({
  workspaceId: z.string().uuid(),
  pol: z.string(),
  dom: z.string(),
  enf: z.string(),
  block: z.string(),
  gov: z.string(),
  trace: z.string()
});

export const CreateBiKpiSchema = z.object({
  workspaceId: z.string().uuid(),
  name: z.string(),
  own: z.string(),
  val: z.string(),
  tar: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateBiObjectiveSchema = z.object({
  workspaceId: z.string().uuid(),
  obj: z.string(),
  spon: z.string(),
  prog: z.string(),
  conf: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateBiReportSchema = z.object({
  workspaceId: z.string().uuid(),
  rep: z.string(),
  freq: z.string(),
  aud: z.string(),
  cert: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateBiScorecardSchema = z.object({
  workspaceId: z.string().uuid(),
  card: z.string(),
  stake: z.string(),
  m1: z.string(),
  m2: z.string(),
  state: z.string(),
  trace: z.string()
});
