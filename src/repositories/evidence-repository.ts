import { prisma } from '@/lib/prisma';
import { Prisma, ConstitutionalEvidence } from '@prisma/client';

export class EvidenceRepository {
  static async findById(id: string): Promise<ConstitutionalEvidence | null> {
    return prisma.constitutionalEvidence.findUnique({ where: { id } });
  }

  static async findByWorkspaceId(workspaceId: string): Promise<ConstitutionalEvidence[]> {
    return prisma.constitutionalEvidence.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' }
    });
  }

  static async create(data: Prisma.ConstitutionalEvidenceCreateInput): Promise<ConstitutionalEvidence> {
    return prisma.constitutionalEvidence.create({ data });
  }

  // Evidence is immutable
}
