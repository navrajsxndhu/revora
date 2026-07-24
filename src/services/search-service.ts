import { SearchRepository } from "@/repositories/search-repository";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class SearchService {
  static async getQueries(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'SEARCH', 'READ')) throw new Error("Unauthorized");
    return SearchRepository.getQueries(workspaceId);
  }
  static async getCollections(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'SEARCH', 'READ')) throw new Error("Unauthorized");
    return SearchRepository.getCollections(workspaceId);
  }
  static async getAnalytics(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'SEARCH', 'READ')) throw new Error("Unauthorized");
    return SearchRepository.getAnalytics(workspaceId);
  }
  static async getContexts(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'SEARCH', 'READ')) throw new Error("Unauthorized");
    return SearchRepository.getContexts(workspaceId);
  }
  static async getEvidence(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'SEARCH', 'READ')) throw new Error("Unauthorized");
    return SearchRepository.getEvidence(workspaceId);
  }
  static async getExplorer(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'SEARCH', 'READ')) throw new Error("Unauthorized");
    return SearchRepository.getExplorer(workspaceId);
  }
  static async getGovernance(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'SEARCH', 'READ')) throw new Error("Unauthorized");
    return SearchRepository.getGovernance(workspaceId);
  }
  static async getRecommendations(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'SEARCH', 'READ')) throw new Error("Unauthorized");
    return SearchRepository.getRecommendations(workspaceId);
  }
}
