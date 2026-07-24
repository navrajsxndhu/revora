import { DataFabricRepository } from "@/repositories/data-fabric-repository";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class DataFabricService {
  static async getAnalytics(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'DATA_FABRIC', 'READ')) throw new Error("Unauthorized");
    return DataFabricRepository.getAnalytics(workspaceId);
  }

  static async getCatalog(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'DATA_FABRIC', 'READ')) throw new Error("Unauthorized");
    return DataFabricRepository.getCatalog(workspaceId);
  }

  static async getEvidence(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'DATA_FABRIC', 'READ')) throw new Error("Unauthorized");
    return DataFabricRepository.getEvidence(workspaceId);
  }

  static async getGovernance(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'DATA_FABRIC', 'READ')) throw new Error("Unauthorized");
    return DataFabricRepository.getGovernance(workspaceId);
  }

  static async getLineage(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'DATA_FABRIC', 'READ')) throw new Error("Unauthorized");
    return DataFabricRepository.getLineage(workspaceId);
  }

  static async getMarketplace(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'DATA_FABRIC', 'READ')) throw new Error("Unauthorized");
    return DataFabricRepository.getMarketplace(workspaceId);
  }

  static async getMasterData(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'DATA_FABRIC', 'READ')) throw new Error("Unauthorized");
    return DataFabricRepository.getMasterData(workspaceId);
  }

  static async getMetadata(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'DATA_FABRIC', 'READ')) throw new Error("Unauthorized");
    return DataFabricRepository.getMetadata(workspaceId);
  }

  static async getPrivacy(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'DATA_FABRIC', 'READ')) throw new Error("Unauthorized");
    return DataFabricRepository.getPrivacy(workspaceId);
  }

  static async getQuality(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'DATA_FABRIC', 'READ')) throw new Error("Unauthorized");
    return DataFabricRepository.getQuality(workspaceId);
  }
}
