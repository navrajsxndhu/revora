import { prisma } from '@/lib/prisma';
import { Prisma, WorkspaceApproval } from '@prisma/client';

export class ApprovalRepository {
  static async findByWorkspaceId(workspaceId: string, limit: number = 50): Promise<WorkspaceApproval[]> {
    return prisma.workspaceApproval.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  static async create(data: Prisma.WorkspaceApprovalCreateInput): Promise<WorkspaceApproval> {
    return prisma.workspaceApproval.create({ data });
  }

  static async updateStatus(id: string, status: string): Promise<WorkspaceApproval> {
    return prisma.workspaceApproval.update({
      where: { id },
      data: { status }
    });
  }
}
