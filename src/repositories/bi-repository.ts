import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export class BusinessIntelligenceRepository {
  static async getAnalytics(workspaceId: string) {
    return prisma.workspaceBiAnalytics.findMany({ where: { workspaceId } });
  }

  static async getBalancedScorecards(workspaceId: string) {
    return prisma.workspaceBiBalancedScorecard.findMany({ where: { workspaceId } });
  }

  static async getDecisions(workspaceId: string) {
    return prisma.workspaceBiDecision.findMany({ where: { workspaceId } });
  }

  static async getEvidence(workspaceId: string) {
    return prisma.workspaceBiEvidence.findMany({ where: { workspaceId } });
  }

  static async getForecasting(workspaceId: string) {
    return prisma.workspaceBiForecasting.findMany({ where: { workspaceId } });
  }

  static async getGovernance(workspaceId: string) {
    return prisma.workspaceBiGovernance.findMany({ where: { workspaceId } });
  }

  static async getKpis(workspaceId: string) {
    return prisma.workspaceBiKpi.findMany({ where: { workspaceId } });
  }

  static async getObjectives(workspaceId: string) {
    return prisma.workspaceBiObjective.findMany({ where: { workspaceId } });
  }

  static async getReports(workspaceId: string) {
    return prisma.workspaceBiReport.findMany({ where: { workspaceId } });
  }

  static async getScorecards(workspaceId: string) {
    return prisma.workspaceBiScorecard.findMany({ where: { workspaceId } });
  }
}
