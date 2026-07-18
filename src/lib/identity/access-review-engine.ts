import { prisma } from "@/lib/prisma";

export const AccessReviewEngine = {
  getReviews: async (workspaceId: string) => {
    return prisma.accessReview.findMany({
      where: { workspaceId }
    });
  }
};
