import { IntelligenceFabricRepository } from "@/repositories/intelligence-fabric-repository";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class IntelligenceFabricService {
  static async getAnalytics(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INTELLIGENCE_FABRIC', 'READ')) throw new Error("Unauthorized");
    return IntelligenceFabricRepository.getAnalytics(workspaceId);
  }

  static async getContext(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INTELLIGENCE_FABRIC', 'READ')) throw new Error("Unauthorized");
    return IntelligenceFabricRepository.getContext(workspaceId);
  }

  static async getCorrelations(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INTELLIGENCE_FABRIC', 'READ')) throw new Error("Unauthorized");
    return IntelligenceFabricRepository.getCorrelations(workspaceId);
  }

  static async getDecisions(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INTELLIGENCE_FABRIC', 'READ')) throw new Error("Unauthorized");
    return IntelligenceFabricRepository.getDecisions(workspaceId);
  }

  static async getDependencies(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INTELLIGENCE_FABRIC', 'READ')) throw new Error("Unauthorized");
    return IntelligenceFabricRepository.getDependencies(workspaceId);
  }

  static async getEvidence(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INTELLIGENCE_FABRIC', 'READ')) throw new Error("Unauthorized");
    return IntelligenceFabricRepository.getEvidence(workspaceId);
  }

  static async getGovernance(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INTELLIGENCE_FABRIC', 'READ')) throw new Error("Unauthorized");
    return IntelligenceFabricRepository.getGovernance(workspaceId);
  }

  static async getImpact(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INTELLIGENCE_FABRIC', 'READ')) throw new Error("Unauthorized");
    return IntelligenceFabricRepository.getImpact(workspaceId);
  }

  static async getInsights(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INTELLIGENCE_FABRIC', 'READ')) throw new Error("Unauthorized");
    return IntelligenceFabricRepository.getInsights(workspaceId);
  }

  static async getRelationships(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INTELLIGENCE_FABRIC', 'READ')) throw new Error("Unauthorized");
    return IntelligenceFabricRepository.getRelationships(workspaceId);
  }
}
