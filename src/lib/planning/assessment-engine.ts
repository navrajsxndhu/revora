import { prisma } from "@/lib/prisma";

export const AssessmentEngine = {
  getAssessments: async (workspaceId: string) => {
    return prisma.planningAssessment.findMany({
      where: { workspaceId }
    });
  }
};
