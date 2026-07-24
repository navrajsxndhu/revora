import { HealthRepository } from "@/repositories/health-repository";
import { CreateHealthSnapshotPayload, CreateHealthSnapshotSchema } from "@/validators/executive.schema";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class HealthService {
  static async getWorkspaceHealth(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'HEALTH_SNAPSHOT', 'READ')) throw new Error("Unauthorized");
    return HealthRepository.getLatestHealthSnapshot(workspaceId);
  }

  static async getWorkspaceHealthHistory(workspaceId: string, limit: number = 30, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'HEALTH_SNAPSHOT', 'READ')) throw new Error("Unauthorized");
    return HealthRepository.getHealthHistory(workspaceId, limit);
  }

  static async recordHealthSnapshot(payload: CreateHealthSnapshotPayload, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'HEALTH_SNAPSHOT', 'CREATE')) throw new Error("Unauthorized");
    const data = CreateHealthSnapshotSchema.parse(payload);
    
    const snapshot = await HealthRepository.createSnapshot({
      workspaceId: data.workspaceId,
      score: data.score,
      status: data.status,
      details: data.details
    });

    await recordAuditEvent({
      workspaceId: data.workspaceId,
      actor: actorId,
      eventType: 'HEALTH_SNAPSHOT_RECORDED',
      message: `Recorded Workspace Health Snapshot: ${data.score}`
    });

    return snapshot;
  }
}
