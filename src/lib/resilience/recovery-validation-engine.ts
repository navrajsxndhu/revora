import { prisma } from "@/lib/prisma";

export const RecoveryValidationEngine = {
  getValidations: async (workspaceId: string) => {
    return prisma.recoveryValidation.findMany({
      where: { workspaceId }
    });
  }
};
