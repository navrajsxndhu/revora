import { prisma } from "@/lib/prisma";

export const ModelRiskEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
