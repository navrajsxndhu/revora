import { prisma } from "@/lib/prisma";

export const LifecycleEngine = {
  getLifecycles: async (workspaceId: string) => {
    return prisma.dataLifecycle.findMany({ where: { workspaceId } });
  }
};
