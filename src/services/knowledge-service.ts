import { KnowledgeRepository } from "@/repositories/knowledge-repository";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class KnowledgeService {
  static async getKnowledgeNodes(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'KNOWLEDGE', 'READ')) throw new Error("Unauthorized");
    return KnowledgeRepository.getNodes(workspaceId);
  }
}
