import { prisma } from '@/lib/prisma';
import { Prisma, FeatureFlag } from '@prisma/client';

export class FeatureFlagRepository {
  static async findById(id: string): Promise<FeatureFlag | null> {
    return prisma.featureFlag.findUnique({ where: { id } });
  }

  static async findByKeyAndWorkspace(key: string, workspaceId: string): Promise<FeatureFlag | null> {
    return prisma.featureFlag.findFirst({
      where: { key, workspaceId }
    });
  }

  static async findByWorkspaceId(workspaceId: string): Promise<FeatureFlag[]> {
    return prisma.featureFlag.findMany({ where: { workspaceId } });
  }

  static async create(data: Prisma.FeatureFlagUncheckedCreateInput): Promise<FeatureFlag> {
    return prisma.featureFlag.create({ data });
  }

  static async update(id: string, data: Prisma.FeatureFlagUncheckedUpdateInput): Promise<FeatureFlag> {
    return prisma.featureFlag.update({
      where: { id },
      data
    });
  }
}
