import { prisma } from "@/lib/prisma";

export const LineageEngine = {
  getLineage: async (workspaceId: string) => {
    return prisma.dataLineage.findMany({ where: { workspaceId } });
  }
};
