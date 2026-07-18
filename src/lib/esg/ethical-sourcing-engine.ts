import { prisma } from "@/lib/prisma";

export const EthicalSourcingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
