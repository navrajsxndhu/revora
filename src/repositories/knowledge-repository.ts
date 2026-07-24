import { prisma } from '@/lib/prisma';
import { Prisma, WorkspaceKnowledgeNode } from '@prisma/client';

export class KnowledgeRepository {
  static async getNodes(workspaceId: string): Promise<WorkspaceKnowledgeNode[]> {
    return prisma.workspaceKnowledgeNode.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' }
    });
  }

  static async createNode(data: Prisma.WorkspaceKnowledgeNodeUncheckedCreateInput): Promise<WorkspaceKnowledgeNode> {
    return prisma.workspaceKnowledgeNode.create({ data });
  }
}
