import { prisma } from "@/lib/prisma";

export const ObservabilityAssessmentEngine = {
  getAssessments: async (workspaceId: string) => {
    return prisma.observabilityAssessment.findMany({ where: { workspaceId } });
  }
};
