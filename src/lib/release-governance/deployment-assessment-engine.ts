import { prisma } from "@/lib/prisma";

export const DeploymentAssessmentEngine = {
  getAssessments: async (workspaceId: string) => {
    return prisma.releaseAssessment.findMany({ where: { workspaceId } });
  }
};
