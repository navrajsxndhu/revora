import { prisma } from "@/lib/prisma";

export const ApplicationEngine = {
  getApplications: async (workspaceId: string) => {
    return prisma.applicationPortfolio.findMany({
      where: { workspaceId }
    });
  }
};
