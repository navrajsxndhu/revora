import { prisma } from "@/lib/prisma";

export const DeploymentWindowEngine = {
  getWindows: async (workspaceId: string) => {
    return prisma.deploymentWindow.findMany({ where: { workspaceId } });
  }
};
