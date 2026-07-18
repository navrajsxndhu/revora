import { prisma } from "@/lib/prisma";

export const RollbackEngine = {
  getRollbacks: async (workspaceId: string) => {
    return prisma.rollbackExecution.findMany({ where: { workspaceId } });
  }
};
