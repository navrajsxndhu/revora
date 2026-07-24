import { prisma } from '@/lib/prisma';
import { Prisma, Workspace, WorkspaceMember } from '@prisma/client';

export class WorkspaceRepository {
  static async findById(id: string): Promise<Workspace | null> {
    return prisma.workspace.findUnique({ where: { id } });
  }

  static async findByOrganizationId(organizationId: string): Promise<Workspace[]> {
    return prisma.workspace.findMany({ where: { organizationId } });
  }

  static async findUserWorkspaces(userId: string): Promise<Workspace[]> {
    const members = await prisma.workspaceMember.findMany({
      where: { userId },
      include: { workspace: true }
    });
    return members.map(m => m.workspace);
  }

  static async create(data: Prisma.WorkspaceCreateInput): Promise<Workspace> {
    return prisma.workspace.create({ data });
  }

  static async update(id: string, data: Prisma.WorkspaceUpdateInput): Promise<Workspace> {
    return prisma.workspace.update({
      where: { id },
      data
    });
  }

  static async delete(id: string): Promise<Workspace> {
    return prisma.workspace.delete({ where: { id } });
  }
}
