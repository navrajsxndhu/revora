import { prisma } from "@/lib/prisma";

export const ClassificationEngine = {
  getClassifications: async (workspaceId: string) => {
    return prisma.dataClassification.findMany({ where: { workspaceId } });
  }
};
