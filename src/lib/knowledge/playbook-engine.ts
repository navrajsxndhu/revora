import { prisma } from "@/lib/prisma";

export const PlaybookEngine = {
  getPlaybooks: async (workspaceId: string) => {
    return prisma.playbookKnowledge.findMany({ where: { workspaceId } });
  }
};
