import { ExecutiveRepository } from "@/repositories/executive-repository";
import { CreateExecutiveMetricPayload, CreateExecutiveMetricSchema } from "@/validators/executive.schema";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class ExecutiveService {
  static async getWorkspaceMetrics(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'EXECUTIVE_METRIC', 'READ')) throw new Error("Unauthorized");
    return ExecutiveRepository.getWorkspaceMetrics(workspaceId);
  }

  static async upsertMetric(payload: CreateExecutiveMetricPayload, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'EXECUTIVE_METRIC', 'UPDATE')) throw new Error("Unauthorized");
    const data = CreateExecutiveMetricSchema.parse(payload);
    
    const metric = await ExecutiveRepository.upsertMetric({
      workspaceId: data.workspaceId,
      key: data.key,
      value: data.value,
      trend: data.trend,
      trendValue: data.trendValue,
      label: data.label
    });

    await recordAuditEvent({
      workspaceId: data.workspaceId,
      actor: actorId,
      eventType: 'EXECUTIVE_METRIC_UPDATED',
      message: `Updated Executive Metric ${data.key}`
    });

    return metric;
  }
}
