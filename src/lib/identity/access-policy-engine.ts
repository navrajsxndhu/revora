import { prisma } from "@/lib/prisma";

export const AccessPolicyEngine = {
  getPolicies: async (workspaceId: string) => {
    return prisma.accessPolicy.findMany({
      where: { workspaceId }
    });
  }
};
