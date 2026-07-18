import { prisma } from "@/lib/prisma";

export const StreamingLedger = {
  getLedger: async (workspaceId: string) => {
    return prisma.streamingLedger.findMany({ where: { workspaceId } });
  }
};
