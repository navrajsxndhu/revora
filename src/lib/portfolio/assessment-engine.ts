import { prisma } from "@/lib/prisma";

export const AssessmentEngine = {
  getAssessments: async (workspaceId: string) => {
    return prisma.portfolioAssessment.findMany({
      where: { workspaceId }
    });
  }
};
