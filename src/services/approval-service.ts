import { ApprovalRepository } from "@/repositories/approval-repository";
import { CreateApprovalPayload, CreateApprovalSchema, UpdateApprovalPayload, UpdateApprovalSchema } from "@/validators/operational.schema";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class ApprovalService {
  static async getWorkspaceApprovals(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'APPROVALS', 'READ')) throw new Error("Unauthorized");
    return ApprovalRepository.findByWorkspaceId(workspaceId);
  }

  static async createApproval(payload: CreateApprovalPayload, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'APPROVALS', 'CREATE')) throw new Error("Unauthorized");
    const data = CreateApprovalSchema.parse(payload);
    
    const approval = await ApprovalRepository.create(data);

    await recordAuditEvent({
      workspaceId: data.workspaceId,
      actor: actorId,
      eventType: 'APPROVAL_CREATED',
      message: `Created approval request: ${data.requestContext}`
    });

    return approval;
  }

  static async updateApproval(payload: UpdateApprovalPayload, workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'APPROVALS', 'UPDATE')) throw new Error("Unauthorized");
    const data = UpdateApprovalSchema.parse(payload);
    
    const approval = await ApprovalRepository.updateStatus(data.id, data.status);

    await recordAuditEvent({
      workspaceId,
      actor: actorId,
      eventType: `APPROVAL_${data.status}`,
      message: `Updated approval ${data.id} to ${data.status}`
    });

    return approval;
  }
}
