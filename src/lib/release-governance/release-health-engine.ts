import { prisma } from "@/lib/prisma";

export const ReleaseHealthEngine = {
  getHealth: async (workspaceId: string) => {
    return prisma.deploymentHealth.findMany({ where: { workspaceId } });
  }
};
