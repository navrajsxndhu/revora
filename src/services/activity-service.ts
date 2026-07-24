import { ActivityRepository } from "@/repositories/activity-repository";
import { CreateActivityPayload, CreateActivitySchema } from "@/validators/operational.schema";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class ActivityService {
  static async getWorkspaceActivities(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ACTIVITIES', 'READ')) throw new Error("Unauthorized");
    return ActivityRepository.findByWorkspaceId(workspaceId);
  }

  static async createActivity(payload: CreateActivityPayload, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ACTIVITIES', 'CREATE')) throw new Error("Unauthorized");
    const data = CreateActivitySchema.parse(payload);
    
    const activity = await ActivityRepository.create(data);

    await recordAuditEvent({
      workspaceId: data.workspaceId,
      actor: actorId,
      eventType: 'ACTIVITY_LOGGED',
      message: `Logged activity: ${data.activityStream}`
    });

    return activity;
  }
}
