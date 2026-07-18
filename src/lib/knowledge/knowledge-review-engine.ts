import { prisma } from "@/lib/prisma";

export const KnowledgeReviewEngine = {
  getReviews: async (workspaceId: string) => {
    return prisma.knowledgeReview.findMany({ where: { workspaceId } });
  }
};
