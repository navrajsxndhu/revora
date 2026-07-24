import { AuditRepository } from "@/repositories/audit-repository";

export type AuditEventType = 
  | 'LOGIN_SUCCESS' 
  | 'LOGIN_FAILED' 
  | 'LOGOUT'
  | 'ROLE_ASSIGNED'
  | 'WORKSPACE_CREATED'
  | 'ORGANIZATION_CREATED'
  | 'ORGANIZATION_UPDATED'
  | 'WORKSPACE_UPDATED'
  | 'USER_UPDATED'
  | 'PERMISSION_DENIED'
  | 'FEATURE_FLAG_TOGGLED'
  | 'EVIDENCE_REGISTERED'
  | 'EVIDENCE_VERIFIED'
  | string;

export interface AuditEventParams {
  workspaceId: string;
  actor: string;
  eventType: AuditEventType;
  message?: string;
  executionId?: string;
}

export class AuditService {
  /**
   * Retrieves Audit Logs for a given workspace
   */
  static async getWorkspaceLogs(workspaceId: string) {
    return AuditRepository.findByWorkspaceId(workspaceId);
  }
}

/**
 * Core Enterprise Audit Logging Service
 * Records immutable audit events into the Evidence Ledger architecture.
 */
export async function recordAuditEvent(params: AuditEventParams) {
  try {
    const log = await AuditRepository.create({
      workspace: { connect: { id: params.workspaceId } },
      actor: params.actor,
      eventType: params.eventType,
      status: 'RECORDED',
      message: params.message || `Action ${params.eventType} recorded.`,
      executionId: params.executionId || 'SYSTEM_AUTH',
    });
    return log;
  } catch (error) {
    console.error("Critical Failure: Could not record audit event.", error, params);
    // In production, this would trigger a Dead Letter Queue or emergency alert
    return null;
  }
}
