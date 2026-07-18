import { prisma } from "@/lib/prisma";

export const ReleaseSimulator = {
  simulate: async (workspaceId: string) => {
    return prisma.releaseSnapshot.findMany({ where: { workspaceId } });
  }
};
