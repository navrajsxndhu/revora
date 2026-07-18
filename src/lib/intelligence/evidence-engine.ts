import { prisma } from "@/lib/prisma";

export const EvidenceEngine = {
  getEvidence: async (workspaceId: string) => {
    return prisma.evidenceCorrelation.findMany({
      where: { workspaceId }
    });
  }
};
