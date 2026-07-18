import { prisma } from "@/lib/prisma";

export const ReleaseEvidenceEngine = {
  getEvidence: async (workspaceId: string) => {
    return prisma.releaseEvidence.findMany({ where: { workspaceId } });
  }
};
