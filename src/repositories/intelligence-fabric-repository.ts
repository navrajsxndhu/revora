import { prisma } from "@/lib/prisma";

export class IntelligenceFabricRepository {
  static async getAnalytics(workspaceId: string) {
    return prisma.workspaceIntelligenceAnalytics.findMany({ where: { workspaceId } });
  }

  static async getContext(workspaceId: string) {
    return prisma.workspaceIntelligenceContext.findMany({ where: { workspaceId } });
  }

  static async getCorrelations(workspaceId: string) {
    return prisma.workspaceIntelligenceCorrelation.findMany({ where: { workspaceId } });
  }

  static async getDecisions(workspaceId: string) {
    return prisma.workspaceIntelligenceDecision.findMany({ where: { workspaceId } });
  }

  static async getDependencies(workspaceId: string) {
    return prisma.workspaceIntelligenceDependency.findMany({ where: { workspaceId } });
  }

  static async getEvidence(workspaceId: string) {
    return prisma.workspaceIntelligenceEvidence.findMany({ where: { workspaceId } });
  }

  static async getGovernance(workspaceId: string) {
    return prisma.workspaceIntelligenceGovernance.findMany({ where: { workspaceId } });
  }

  static async getImpact(workspaceId: string) {
    return prisma.workspaceIntelligenceImpact.findMany({ where: { workspaceId } });
  }

  static async getInsights(workspaceId: string) {
    return prisma.workspaceIntelligenceInsight.findMany({ where: { workspaceId } });
  }

  static async getRelationships(workspaceId: string) {
    return prisma.workspaceIntelligenceRelationship.findMany({ where: { workspaceId } });
  }
}
