import { prisma } from "@/lib/prisma";

export const ApiContractEngine = {
  getContracts: async (workspaceId: string) => {
    return prisma.apiContract.findMany({ where: { workspaceId } });
  }
};
