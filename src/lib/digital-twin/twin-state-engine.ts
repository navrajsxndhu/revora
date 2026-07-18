import { prisma } from "@/lib/prisma";

export const TwinStateEngine = {
  getStates: async (workspaceId: string) => {
    return prisma.twinState.findMany({
      where: { workspaceId }
    });
  }
};
