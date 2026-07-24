import { prisma } from "@/lib/prisma";

export class SecurityRepository {
  static async getIncidents(workspaceId: string) {
    return prisma.workspaceSecurityIncident.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getThreats(workspaceId: string) {
    return prisma.workspaceThreat.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getRisks(workspaceId: string) {
    return prisma.workspaceRisk.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getComplianceFindings(workspaceId: string) {
    return prisma.workspaceComplianceFinding.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getVulnerabilities(workspaceId: string) {
    return prisma.workspaceVulnerability.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getAccessReviews(workspaceId: string) {
    return prisma.workspaceAccessReview.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getSecurityPolicies(workspaceId: string) {
    return prisma.workspaceSecurityPolicy.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getSecurityEvidence(workspaceId: string) {
    return prisma.workspaceSecurityEvidence.findMany({
      where: { workspaceId },
      orderBy: { timestamp: "desc" },
    });
  }

  static async getSecurityAnalytics(workspaceId: string) {
    return prisma.workspaceSecurityAnalytics.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getSecurityGovernance(workspaceId: string) {
    return prisma.workspaceSecurityGovernance.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    });
  }
}
