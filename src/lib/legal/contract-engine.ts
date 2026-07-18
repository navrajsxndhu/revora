import { prisma } from "@/lib/prisma";

export const ContractEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
