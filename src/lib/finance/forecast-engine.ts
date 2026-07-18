import { prisma } from "@/lib/prisma";

export const ForecastEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
