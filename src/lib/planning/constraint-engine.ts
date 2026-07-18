import { prisma } from "@/lib/prisma";

export const ConstraintEngine = {
  getConstraints: async (workspaceId: string) => {
    return prisma.capacityConstraint.findMany({
      where: { workspaceId }
    });
  }
};
