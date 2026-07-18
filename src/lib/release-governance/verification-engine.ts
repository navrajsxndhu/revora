import { prisma } from "@/lib/prisma";

export const VerificationEngine = {
  getVerifications: async (workspaceId: string) => {
    return prisma.productionVerification.findMany({ where: { workspaceId } });
  }
};
