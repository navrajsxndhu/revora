import { prisma } from "@/lib/prisma";

export class WorkflowRepository {
  static async getAnalytics(workspaceId: string) {
    return prisma.workspaceOrchestrationAnalytics.findMany({ where: { workspaceId } });
  }

  static async getApprovals(workspaceId: string) {
    return prisma.workspaceOrchestrationApproval.findMany({ where: { workspaceId } });
  }

  static async getDesigners(workspaceId: string) {
    return prisma.workspaceOrchestrationDesigner.findMany({ where: { workspaceId } });
  }

  static async getEvidence(workspaceId: string) {
    return prisma.workspaceOrchestrationEvidence.findMany({ where: { workspaceId } });
  }

  static async getGovernance(workspaceId: string) {
    return prisma.workspaceOrchestrationGovernance.findMany({ where: { workspaceId } });
  }

  static async getIntegrations(workspaceId: string) {
    return prisma.workspaceOrchestrationIntegration.findMany({ where: { workspaceId } });
  }

  static async getLibrary(workspaceId: string) {
    return prisma.workspaceOrchestrationLibrary.findMany({ where: { workspaceId } });
  }

  static async getRegistry(workspaceId: string) {
    return prisma.workspaceOrchestrationRegistry.findMany({ where: { workspaceId } });
  }

  static async getSimulations(workspaceId: string) {
    return prisma.workspaceOrchestrationSimulation.findMany({ where: { workspaceId } });
  }

  static async getWorkflows(workspaceId: string) {
    return prisma.workspaceOrchestrationWorkflow.findMany({ where: { workspaceId } });
  }
}
