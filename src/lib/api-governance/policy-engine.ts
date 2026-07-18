import { prisma } from "@/lib/prisma";

export const PolicyEngine = {
  getPolicies: async (workspaceId: string) => {
    return prisma.apiPolicy.findMany({ where: { workspaceId } });
  }
};
