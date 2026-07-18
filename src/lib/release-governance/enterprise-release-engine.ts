import { prisma } from "@/lib/prisma";

export const EnterpriseReleaseEngine = {
  getReleases: async (workspaceId: string) => {
    return prisma.enterpriseRelease.findMany({ where: { workspaceId } });
  }
};
