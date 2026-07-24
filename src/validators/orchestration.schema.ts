import { z } from "zod";

export const CreateOrchestrationAnalyticsSchema = z.object({
  workspaceId: z.string().uuid(),
  cat: z.string(),
  exec: z.string(),
  human: z.string(),
  sys: z.string(),
  cond: z.string(),
  trace: z.string()
});

export const CreateOrchestrationApprovalSchema = z.object({
  workspaceId: z.string().uuid(),
  req: z.string(),
  wf: z.string(),
  reqp: z.string(),
  wait: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateOrchestrationDesignerSchema = z.object({
  workspaceId: z.string().uuid(),
  wf: z.string(),
  dept: z.string(),
  comp: z.string(),
  human: z.string(),
  state: z.string(),
  trace: z.string()
});

export const CreateOrchestrationEvidenceSchema = z.object({
  workspaceId: z.string().uuid(),
  evidenceId: z.string(),
  time: z.coerce.date(),
  act: z.string(),
  acti: z.string(),
  gov: z.string(),
  trace: z.string()
});

export const CreateOrchestrationGovernanceSchema = z.object({
  workspaceId: z.string().uuid(),
  pol: z.string(),
  dom: z.string(),
  enf: z.string(),
  block: z.string(),
  gov: z.string(),
  trace: z.string()
});

export const CreateOrchestrationIntegrationSchema = z.object({
  workspaceId: z.string().uuid(),
  path: z.string(),
  src: z.string(),
  targ: z.string(),
  ptype: z.string(),
  state: z.string(),
  trace: z.string()
});

export const CreateOrchestrationLibrarySchema = z.object({
  workspaceId: z.string().uuid(),
  tpl: z.string(),
  cat: z.string(),
  cert: z.string(),
  count: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateOrchestrationRegistrySchema = z.object({
  workspaceId: z.string().uuid(),
  registryId: z.string(),
  own: z.string(),
  risk: z.string(),
  freq: z.string(),
  state: z.string(),
  trace: z.string()
});

export const CreateOrchestrationSimulationSchema = z.object({
  workspaceId: z.string().uuid(),
  targ: z.string(),
  cond: z.string(),
  out: z.string(),
  risk: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateOrchestrationWorkflowSchema = z.object({
  workspaceId: z.string().uuid(),
  inst: z.string(),
  ref: z.string(),
  by: z.string(),
  step: z.string(),
  status: z.string(),
  trace: z.string()
});
