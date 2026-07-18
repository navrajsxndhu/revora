import { prisma } from "@/lib/prisma";

export const LockEngine = {
  getLocks: async (workspaceId: string) => {
    return prisma.executionLock.findMany({
      where: { workspaceId }
    });
  }
};
