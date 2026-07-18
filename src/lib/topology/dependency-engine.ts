import { prisma } from "@/lib/prisma";

export const DependencyEngine = {
  getDependencies: async (workspaceId: string) => {
    return prisma.serviceDependency.findMany({
      where: { workspaceId }
    });
  }
};
