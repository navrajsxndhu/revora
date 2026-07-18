import { prisma } from "@/lib/prisma";

export const ApiIndex = {
  getIndex: async (workspaceId: string) => {
    return prisma.apiIndex.findMany({ where: { workspaceId } });
  }
};
