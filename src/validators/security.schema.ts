import { z } from "zod";

export const createSecurityIncidentSchema = z.object({
  title: z.string().min(1, "Title is required"),
  severity: z.string().min(1, "Severity is required"),
  status: z.string().min(1, "Status is required"),
  owner: z.string().min(1, "Owner is required"),
});

export const createThreatSchema = z.object({
  threatName: z.string().min(1, "Threat name is required"),
  level: z.string().min(1, "Level is required"),
  source: z.string().min(1, "Source is required"),
  status: z.string().min(1, "Status is required"),
});

export const createRiskSchema = z.object({
  riskName: z.string().min(1, "Risk name is required"),
  impact: z.string().min(1, "Impact is required"),
  likelihood: z.string().min(1, "Likelihood is required"),
  score: z.number().min(0).max(100),
});

export const createComplianceFindingSchema = z.object({
  finding: z.string().min(1, "Finding is required"),
  framework: z.string().min(1, "Framework is required"),
  severity: z.string().min(1, "Severity is required"),
  status: z.string().min(1, "Status is required"),
});

export const createVulnerabilitySchema = z.object({
  cve: z.string().min(1, "CVE is required"),
  severity: z.string().min(1, "Severity is required"),
  asset: z.string().min(1, "Asset is required"),
  status: z.string().min(1, "Status is required"),
});

export const createAccessReviewSchema = z.object({
  reviewer: z.string().min(1, "Reviewer is required"),
  system: z.string().min(1, "System is required"),
  progress: z.string().min(1, "Progress is required"),
  status: z.string().min(1, "Status is required"),
});

export const createSecurityPolicySchema = z.object({
  policyName: z.string().min(1, "Policy name is required"),
  enforcement: z.string().min(1, "Enforcement is required"),
  version: z.string().min(1, "Version is required"),
  status: z.string().min(1, "Status is required"),
});

export const createSecurityEvidenceSchema = z.object({
  evidenceId: z.string().min(1, "Evidence ID is required"),
  description: z.string().min(1, "Description is required"),
  hash: z.string().min(1, "Hash is required"),
});

export const createSecurityAnalyticsSchema = z.object({
  metricName: z.string().min(1, "Metric name is required"),
  value: z.string().min(1, "Value is required"),
  trend: z.string().min(1, "Trend is required"),
  period: z.string().min(1, "Period is required"),
});

export const createSecurityGovernanceSchema = z.object({
  controlName: z.string().min(1, "Control name is required"),
  framework: z.string().min(1, "Framework is required"),
  owner: z.string().min(1, "Owner is required"),
  status: z.string().min(1, "Status is required"),
});
