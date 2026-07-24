import { BusinessIntelligenceRepository } from "@/repositories/bi-repository";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class BusinessIntelligenceService {
  static async getAnalytics(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'BUSINESS_INTELLIGENCE', 'READ')) throw new Error("Unauthorized");
    return BusinessIntelligenceRepository.getAnalytics(workspaceId);
  }

  static async getBalancedScorecards(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'BUSINESS_INTELLIGENCE', 'READ')) throw new Error("Unauthorized");
    return BusinessIntelligenceRepository.getBalancedScorecards(workspaceId);
  }

  static async getDecisions(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'BUSINESS_INTELLIGENCE', 'READ')) throw new Error("Unauthorized");
    return BusinessIntelligenceRepository.getDecisions(workspaceId);
  }

  static async getEvidence(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'BUSINESS_INTELLIGENCE', 'READ')) throw new Error("Unauthorized");
    return BusinessIntelligenceRepository.getEvidence(workspaceId);
  }

  static async getForecasting(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'BUSINESS_INTELLIGENCE', 'READ')) throw new Error("Unauthorized");
    return BusinessIntelligenceRepository.getForecasting(workspaceId);
  }

  static async getGovernance(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'BUSINESS_INTELLIGENCE', 'READ')) throw new Error("Unauthorized");
    return BusinessIntelligenceRepository.getGovernance(workspaceId);
  }

  static async getKpis(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'BUSINESS_INTELLIGENCE', 'READ')) throw new Error("Unauthorized");
    return BusinessIntelligenceRepository.getKpis(workspaceId);
  }

  static async getObjectives(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'BUSINESS_INTELLIGENCE', 'READ')) throw new Error("Unauthorized");
    return BusinessIntelligenceRepository.getObjectives(workspaceId);
  }

  static async getReports(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'BUSINESS_INTELLIGENCE', 'READ')) throw new Error("Unauthorized");
    return BusinessIntelligenceRepository.getReports(workspaceId);
  }

  static async getScorecards(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'BUSINESS_INTELLIGENCE', 'READ')) throw new Error("Unauthorized");
    return BusinessIntelligenceRepository.getScorecards(workspaceId);
  }
}
