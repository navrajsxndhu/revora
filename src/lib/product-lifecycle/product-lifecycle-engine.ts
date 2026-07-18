import { prisma } from "@/lib/prisma";

export const ProductLifecycleEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
