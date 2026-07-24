import { z } from 'zod';

export const RegisterEvidenceSchema = z.object({
  workspaceId: z.string().uuid(),
  tenantId: z.string().optional(),
  organizationId: z.string().optional(),
  runtimeExecutionId: z.string().optional(),
  status: z.string().default('CERTIFIED'),
});

export type RegisterEvidencePayload = z.infer<typeof RegisterEvidenceSchema>;
