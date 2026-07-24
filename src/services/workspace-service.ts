import { WorkspaceRepository } from '@/repositories/workspace-repository';
import { CreateWorkspacePayload, CreateWorkspaceSchema, UpdateWorkspacePayload, UpdateWorkspaceSchema } from '@/validators/workspace.schema';
import { recordAuditEvent } from '@/audit/audit-service';
import { Workspace } from '@prisma/client';
import { can } from '@/permissions/engine';
import { prisma } from '@/lib/prisma';

export class WorkspaceService {
  static async getWorkspace(id: string): Promise<Workspace | null> {
    return WorkspaceRepository.findById(id);
  }

  static async getUserWorkspaces(userId: string): Promise<Workspace[]> {
    return WorkspaceRepository.findUserWorkspaces(userId);
  }

  static async createWorkspace(payload: CreateWorkspacePayload, actorId: string): Promise<Workspace> {
    const data = CreateWorkspaceSchema.parse(payload);
    
    // Create workspace and immediately assign the creator as OWNER
    const workspace = await prisma.workspace.create({
      data: {
        name: data.name,
        organizationId: data.organizationId,
        members: {
          create: {
            userId: actorId,
            role: 'OWNER'
          }
        }
      }
    });

    await recordAuditEvent({
      workspaceId: workspace.id,
      actor: actorId,
      eventType: 'WORKSPACE_CREATED',
      message: `Created Workspace: ${workspace.name}`
    });

    return workspace;
  }

  static async updateWorkspace(id: string, payload: UpdateWorkspacePayload, actorId: string, actorRole: string): Promise<Workspace> {
    if (!can({ role: actorRole } as any, 'WORKSPACE', 'UPDATE')) {
      throw new Error("Unauthorized to update workspace");
    }

    const data = UpdateWorkspaceSchema.parse(payload);
    const workspace = await WorkspaceRepository.update(id, data);
    
    await recordAuditEvent({
      workspaceId: id,
      actor: actorId,
      eventType: 'WORKSPACE_UPDATED',
      message: `Updated Workspace settings`
    });

    return workspace;
  }
}
