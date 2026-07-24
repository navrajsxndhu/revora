import { SecurityRepository } from "@/repositories/security-repository";
import { can } from "@/permissions/engine";
import { AuditService } from "@/audit/audit-service";

export class SecurityService {
  static async getIncidents(workspaceId: string, userId: string, role: string) {
    if (!can({ id: userId, role }, "SECURITY", "READ")) throw new Error("Unauthorized");
    return SecurityRepository.getIncidents(workspaceId);
  }

  static async getThreats(workspaceId: string, userId: string, role: string) {
    if (!can({ id: userId, role }, "SECURITY", "READ")) throw new Error("Unauthorized");
    return SecurityRepository.getThreats(workspaceId);
  }

  static async getRisks(workspaceId: string, userId: string, role: string) {
    if (!can({ id: userId, role }, "SECURITY", "READ")) throw new Error("Unauthorized");
    return SecurityRepository.getRisks(workspaceId);
  }

  static async getComplianceFindings(workspaceId: string, userId: string, role: string) {
    if (!can({ id: userId, role }, "SECURITY", "READ")) throw new Error("Unauthorized");
    return SecurityRepository.getComplianceFindings(workspaceId);
  }

  static async getVulnerabilities(workspaceId: string, userId: string, role: string) {
    if (!can({ id: userId, role }, "SECURITY", "READ")) throw new Error("Unauthorized");
    return SecurityRepository.getVulnerabilities(workspaceId);
  }

  static async getAccessReviews(workspaceId: string, userId: string, role: string) {
    if (!can({ id: userId, role }, "SECURITY", "READ")) throw new Error("Unauthorized");
    return SecurityRepository.getAccessReviews(workspaceId);
  }

  static async getSecurityPolicies(workspaceId: string, userId: string, role: string) {
    if (!can({ id: userId, role }, "SECURITY", "READ")) throw new Error("Unauthorized");
    return SecurityRepository.getSecurityPolicies(workspaceId);
  }

  static async getSecurityEvidence(workspaceId: string, userId: string, role: string) {
    if (!can({ id: userId, role }, "SECURITY", "READ")) throw new Error("Unauthorized");
    return SecurityRepository.getSecurityEvidence(workspaceId);
  }

  static async getSecurityAnalytics(workspaceId: string, userId: string, role: string) {
    if (!can({ id: userId, role }, "SECURITY", "READ")) throw new Error("Unauthorized");
    return SecurityRepository.getSecurityAnalytics(workspaceId);
  }

  static async getSecurityGovernance(workspaceId: string, userId: string, role: string) {
    if (!can({ id: userId, role }, "SECURITY", "READ")) throw new Error("Unauthorized");
    return SecurityRepository.getSecurityGovernance(workspaceId);
  }
}
