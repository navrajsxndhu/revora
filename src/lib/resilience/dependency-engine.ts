import { prisma } from "@/lib/prisma";

export const DependencyEngine = {
  getDependencies: async (workspaceId: string) => {
    return prisma.recoveryDependency.findMany({
      where: { workspaceId }
    });
  }
};
