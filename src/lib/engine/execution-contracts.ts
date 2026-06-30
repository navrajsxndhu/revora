import { z } from "zod";

// --- CORE TELEMETRY SCHEMAS ---

export const ApiTraceSchema = z.object({
  id: z.string().uuid(),
  workflowExecutionId: z.string().uuid(),
  nodeId: z.string(),
  status: z.enum(["SUCCESS", "ERROR"]),
  latencyMs: z.number(),
  requestPayload: z.any().optional(),
  responsePayload: z.any().optional(),
  errorMessage: z.string().optional(),
  timestamp: z.date(),
});

export type ApiTrace = z.infer<typeof ApiTraceSchema>;

// --- DEPLOYMENT STATE SCHEMAS ---

// Simulating Vercel's webhook payload
export const VercelDeploymentPayloadSchema = z.object({
  type: z.literal("deployment.error"),
  payload: z.object({
    deployment: z.object({
      id: z.string(),
      url: z.string(),
      name: z.string(),
      meta: z.object({
        githubCommitSha: z.string().optional(),
        githubCommitMessage: z.string().optional(),
        githubCommitAuthorName: z.string().optional(),
      }).optional(),
    }),
    target: z.string().optional(),
    regions: z.array(z.string()).optional(),
  }),
});

export type VercelDeploymentPayload = z.infer<typeof VercelDeploymentPayloadSchema>;

// --- INCIDENT SCHEMAS ---

export const IncidentStateSchema = z.enum(["OPEN", "INVESTIGATING", "RESOLVED"]);

export const IncidentSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  state: IncidentStateSchema,
  relatedTraceId: z.string().uuid(),
  rootCauseSummary: z.string().optional(),
  recommendedAction: z.string().optional(),
  probableCommit: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Incident = z.infer<typeof IncidentSchema>;
