import { prisma } from "@/lib/prisma";

export const ApiLedger = {
  getLedger: async (workspaceId: string) => {
    return prisma.apiLedger.findMany({ where: { workspaceId } });
  }
};
