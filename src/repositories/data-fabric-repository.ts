import { prisma } from "@/lib/prisma";

export class DataFabricRepository {
  static async getAnalytics(workspaceId: string) {
    return prisma.workspaceDataAnalytics.findMany({ where: { workspaceId } });
  }

  static async getCatalog(workspaceId: string) {
    return prisma.workspaceDataCatalog.findMany({ where: { workspaceId } });
  }

  static async getEvidence(workspaceId: string) {
    return prisma.workspaceDataEvidence.findMany({ where: { workspaceId } });
  }

  static async getGovernance(workspaceId: string) {
    return prisma.workspaceDataGovernance.findMany({ where: { workspaceId } });
  }

  static async getLineage(workspaceId: string) {
    return prisma.workspaceDataLineage.findMany({ where: { workspaceId } });
  }

  static async getMarketplace(workspaceId: string) {
    return prisma.workspaceDataMarketplace.findMany({ where: { workspaceId } });
  }

  static async getMasterData(workspaceId: string) {
    return prisma.workspaceMasterData.findMany({ where: { workspaceId } });
  }

  static async getMetadata(workspaceId: string) {
    return prisma.workspaceMetadata.findMany({ where: { workspaceId } });
  }

  static async getPrivacy(workspaceId: string) {
    return prisma.workspacePrivacyClassification.findMany({ where: { workspaceId } });
  }

  static async getQuality(workspaceId: string) {
    return prisma.workspaceDataQuality.findMany({ where: { workspaceId } });
  }
}
