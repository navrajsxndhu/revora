import { TimelineRepository } from "@/repositories/timeline-repository";
import { CreateTimelineEventPayload, CreateTimelineEventSchema } from "@/validators/operational.schema";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class TimelineService {
  static async getWorkspaceTimeline(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'TIMELINE', 'READ')) throw new Error("Unauthorized");
    return TimelineRepository.findByWorkspaceId(workspaceId);
  }

  static async createTimelineEvent(payload: CreateTimelineEventPayload, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'TIMELINE', 'CREATE')) throw new Error("Unauthorized");
    const data = CreateTimelineEventSchema.parse(payload);
    
    const timelineEvent = await TimelineRepository.create(data);

    await recordAuditEvent({
      workspaceId: data.workspaceId,
      actor: actorId,
      eventType: 'TIMELINE_EVENT_CREATED',
      message: `Logged timeline event: ${data.eventContext}`
    });

    return timelineEvent;
  }
}
