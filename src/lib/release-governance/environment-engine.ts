import { prisma } from "@/lib/prisma";

export const EnvironmentEngine = {
  getEnvironments: async (workspaceId: string) => {
    return prisma.deploymentEnvironment.findMany({ where: { workspaceId } });
  }
};
