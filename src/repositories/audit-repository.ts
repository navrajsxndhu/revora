import { prisma } from '@/lib/prisma';
import { Prisma, AuditLog } from '@prisma/client';

export class AuditRepository {
  static async findById(id: string): Promise<AuditLog | null> {
    return prisma.auditLog.findUnique({ where: { id } });
  }

  static async findByWorkspaceId(workspaceId: string): Promise<AuditLog[]> {
    return prisma.auditLog.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: 100 // Default limit
    });
  }

  static async create(data: Prisma.AuditLogCreateInput): Promise<AuditLog> {
    return prisma.auditLog.create({ data });
  }

  // Audit logs are immutable, no update or delete methods
}
