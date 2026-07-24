import { EvidenceRepository } from "@/repositories/evidence-repository";
import { RegisterEvidencePayload, RegisterEvidenceSchema } from "@/validators/evidence.schema";
import { recordAuditEvent } from "@/audit/audit-service";
import { ConstitutionalEvidence } from "@prisma/client";

export class EvidenceService {
  static async getEvidence(id: string): Promise<ConstitutionalEvidence | null> {
    return EvidenceRepository.findById(id);
  }

  static async getWorkspaceEvidence(workspaceId: string): Promise<ConstitutionalEvidence[]> {
    return EvidenceRepository.findByWorkspaceId(workspaceId);
  }

  static async registerEvidence(payload: RegisterEvidencePayload, actorId: string): Promise<ConstitutionalEvidence> {
    const data = RegisterEvidenceSchema.parse(payload);
    
    
    const evidence = await EvidenceRepository.create({
      workspaceId: data.workspaceId,
      tenantId: data.tenantId,
      organizationId: data.organizationId,
      runtimeExecutionId: data.runtimeExecutionId,
      status: data.status
    });

    await recordAuditEvent({
      workspaceId: data.workspaceId,
      actor: actorId,
      eventType: 'EVIDENCE_REGISTERED',
      message: `Registered Evidence ${evidence.id}`
    });

    return evidence;
  }
}
