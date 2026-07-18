import { prisma } from "@/lib/prisma";

export const ReplayEngine = {
  getReplays: async (workspaceId: string) => {
    return prisma.replaySession.findMany({
      where: { workspaceId }
    });
  }
};
