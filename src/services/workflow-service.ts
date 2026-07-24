import { WorkflowRepository } from "@/repositories/workflow-repository";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class WorkflowService {
  static async getAnalytics(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ORCHESTRATION', 'READ')) throw new Error("Unauthorized");
    return WorkflowRepository.getAnalytics(workspaceId);
  }

  static async getApprovals(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ORCHESTRATION', 'READ')) throw new Error("Unauthorized");
    return WorkflowRepository.getApprovals(workspaceId);
  }

  static async getDesigners(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ORCHESTRATION', 'READ')) throw new Error("Unauthorized");
    return WorkflowRepository.getDesigners(workspaceId);
  }

  static async getEvidence(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ORCHESTRATION', 'READ')) throw new Error("Unauthorized");
    return WorkflowRepository.getEvidence(workspaceId);
  }

  static async getGovernance(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ORCHESTRATION', 'READ')) throw new Error("Unauthorized");
    return WorkflowRepository.getGovernance(workspaceId);
  }

  static async getIntegrations(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ORCHESTRATION', 'READ')) throw new Error("Unauthorized");
    return WorkflowRepository.getIntegrations(workspaceId);
  }

  static async getLibrary(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ORCHESTRATION', 'READ')) throw new Error("Unauthorized");
    return WorkflowRepository.getLibrary(workspaceId);
  }

  static async getRegistry(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ORCHESTRATION', 'READ')) throw new Error("Unauthorized");
    return WorkflowRepository.getRegistry(workspaceId);
  }

  static async getSimulations(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ORCHESTRATION', 'READ')) throw new Error("Unauthorized");
    return WorkflowRepository.getSimulations(workspaceId);
  }

  static async getWorkflows(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'ORCHESTRATION', 'READ')) throw new Error("Unauthorized");
    return WorkflowRepository.getWorkflows(workspaceId);
  }
}
