import { prisma } from "@/lib/prisma";

export const TwinEvidenceEngine = {
  getEvidence: async (workspaceId: string) => {
    return prisma.simulationEvidence.findMany({
      where: { workspaceId }
    });
  }
};
