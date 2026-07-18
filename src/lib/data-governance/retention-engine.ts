import { prisma } from "@/lib/prisma";

export const RetentionEngine = {
  getPolicies: async (workspaceId: string) => {
    return prisma.dataRetentionPolicy.findMany({ where: { workspaceId } });
  }
};
