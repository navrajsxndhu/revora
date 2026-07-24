import { IncidentRepository } from "@/repositories/incident-repository";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class IncidentService {
  static async getRecentIncidents(workspaceId: string, limit: number = 5, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INCIDENT', 'READ')) throw new Error("Unauthorized");
    return IncidentRepository.findRecentIncidents(workspaceId, limit);
  }

  static async getActiveIncidents(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INCIDENT', 'READ')) throw new Error("Unauthorized");
    return IncidentRepository.findActiveIncidents(workspaceId);
  }

  static async getIncident(id: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INCIDENT', 'READ')) throw new Error("Unauthorized");
    return IncidentRepository.getIncident(id);
  }

  // Example mutation:
  static async resolveIncident(id: string, workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'INCIDENT', 'UPDATE')) throw new Error("Unauthorized");
    
    const incident = await IncidentRepository.updateState(id, 'RESOLVED');

    await recordAuditEvent({
      workspaceId,
      actor: actorId,
      eventType: 'INCIDENT_RESOLVED',
      message: `Resolved incident ${id}`
    });

    return incident;
  }
}
