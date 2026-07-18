import { prisma } from "@/lib/prisma";

export const ReleaseEngine = {
  getVersions: async (workspaceId: string) => {
    return prisma.releaseVersion.findMany({ where: { workspaceId } });
  }
};
