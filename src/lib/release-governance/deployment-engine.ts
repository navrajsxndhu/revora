import { prisma } from "@/lib/prisma";

export const DeploymentEngine = {
  getDeployments: async (workspaceId: string) => {
    return prisma.deploymentExecution.findMany({ where: { workspaceId } });
  }
};
