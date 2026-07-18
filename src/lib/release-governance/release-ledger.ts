import { prisma } from "@/lib/prisma";

export const ReleaseLedgerEngine = {
  getLedger: async (workspaceId: string) => {
    return prisma.releaseLedger.findMany({ where: { workspaceId } });
  }
};
