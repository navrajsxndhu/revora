import { z } from "zod";

export const CreateDataFabricAnalyticsSchema = z.object({
  workspaceId: z.string().uuid(),
  dept: z.string(),
  adopt: z.string(),
  qual: z.string(),
  orph: z.string(),
  state: z.string(),
  trace: z.string()
});

export const CreateDataFabricCatalogSchema = z.object({
  workspaceId: z.string().uuid(),
  asset: z.string(),
  type: z.string(),
  steward: z.string(),
  purp: z.string(),
  class: z.string(),
  trace: z.string()
});

export const CreateDataFabricEvidenceSchema = z.object({
  workspaceId: z.string().uuid(),
  evidenceId: z.string(),
  time: z.coerce.date(),
  act: z.string(),
  acti: z.string(),
  gov: z.string(),
  trace: z.string()
});

export const CreateDataFabricGovernanceSchema = z.object({
  workspaceId: z.string().uuid(),
  pol: z.string(),
  class: z.string(),
  enf: z.string(),
  prev: z.string(),
  gov: z.string(),
  trace: z.string()
});

export const CreateDataFabricLineageSchema = z.object({
  workspaceId: z.string().uuid(),
  targ: z.string(),
  src: z.string(),
  int: z.string(),
  down: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateDataFabricMarketplaceSchema = z.object({
  workspaceId: z.string().uuid(),
  prod: z.string(),
  pub: z.string(),
  req: z.string(),
  cert: z.string(),
  status: z.string(),
  trace: z.string()
});

export const CreateMasterDataSchema = z.object({
  workspaceId: z.string().uuid(),
  dom: z.string(),
  sor: z.string(),
  own: z.string(),
  sync: z.string(),
  gov: z.string(),
  trace: z.string()
});

export const CreateMetadataSchema = z.object({
  workspaceId: z.string().uuid(),
  asset: z.string(),
  fld: z.string(),
  term: z.string(),
  desc: z.string(),
  class: z.string(),
  trace: z.string()
});

export const CreatePrivacyClassificationSchema = z.object({
  workspaceId: z.string().uuid(),
  dom: z.string(),
  class: z.string(),
  ac: z.string(),
  ret: z.string(),
  gov: z.string(),
  trace: z.string()
});

export const CreateDataQualitySchema = z.object({
  workspaceId: z.string().uuid(),
  set: z.string(),
  dim: z.string(),
  rule: z.string(),
  rate: z.string(),
  status: z.string(),
  trace: z.string()
});
