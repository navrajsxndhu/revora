import { prisma } from "@/lib/prisma";

export const ValidationEngine = {
  getValidations: async (workspaceId: string) => {
    return prisma.deploymentValidation.findMany({ where: { workspaceId } });
  }
};
