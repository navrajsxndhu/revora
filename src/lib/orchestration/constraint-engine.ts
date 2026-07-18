import { prisma } from "@/lib/prisma";

export const ConstraintEngine = {
  getConstraints: async (workspaceId: string) => {
    return prisma.executionConstraint.findMany({
      where: { workspaceId }
    });
  }
};
