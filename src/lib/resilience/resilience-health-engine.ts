import { prisma } from "@/lib/prisma";

export const ResilienceHealthEngine = {
  getHealth: async (workspaceId: string) => {
    return prisma.resilienceAssessment.findMany({
      where: { workspaceId }
    });
  }
};
