import { prisma } from "@/lib/prisma";

export const StreamEngine = {
  getStreams: async (workspaceId: string) => {
    return prisma.eventStream.findMany({ where: { workspaceId } });
  }
};
