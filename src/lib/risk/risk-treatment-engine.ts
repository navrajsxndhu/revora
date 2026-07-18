import { prisma } from "@/lib/prisma";

export const RiskTreatmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
