import { prisma } from "@/lib/prisma";

export const MessageContractEngine = {
  getContracts: async (workspaceId: string) => {
    return prisma.messageContract.findMany({ where: { workspaceId } });
  }
};
