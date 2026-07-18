import { prisma } from "@/lib/prisma";

export const RetryEngine = {
  getPolicies: async (workspaceId: string) => {
    return prisma.retryPolicy.findMany({ where: { workspaceId } });
  }
};
