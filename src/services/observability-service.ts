import { ObservabilityRepository } from "@/repositories/observability-repository";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class ObservabilityService {
  static async getTelemetry(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'OBSERVABILITY', 'READ')) throw new Error("Unauthorized");
    return ObservabilityRepository.getTelemetry(workspaceId);
  }
  static async getServices(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'OBSERVABILITY', 'READ')) throw new Error("Unauthorized");
    return ObservabilityRepository.getServices(workspaceId);
  }
  static async getIncidents(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'OBSERVABILITY', 'READ')) throw new Error("Unauthorized");
    return ObservabilityRepository.getIncidents(workspaceId);
  }
  static async getReliability(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'OBSERVABILITY', 'READ')) throw new Error("Unauthorized");
    return ObservabilityRepository.getReliability(workspaceId);
  }
  static async getCapacity(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'OBSERVABILITY', 'READ')) throw new Error("Unauthorized");
    return ObservabilityRepository.getCapacity(workspaceId);
  }
  static async getDependencies(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'OBSERVABILITY', 'READ')) throw new Error("Unauthorized");
    return ObservabilityRepository.getDependencies(workspaceId);
  }
  static async getAnalytics(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'OBSERVABILITY', 'READ')) throw new Error("Unauthorized");
    return ObservabilityRepository.getAnalytics(workspaceId);
  }
  static async getResilience(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'OBSERVABILITY', 'READ')) throw new Error("Unauthorized");
    return ObservabilityRepository.getResilience(workspaceId);
  }
  static async getGovernance(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'OBSERVABILITY', 'READ')) throw new Error("Unauthorized");
    return ObservabilityRepository.getGovernance(workspaceId);
  }
  static async getEvidence(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'OBSERVABILITY', 'READ')) throw new Error("Unauthorized");
    return ObservabilityRepository.getEvidence(workspaceId);
  }
}
