import { prisma } from "@/lib/prisma";

export const ForecastingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
