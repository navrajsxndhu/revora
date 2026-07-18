import { prisma } from "@/lib/prisma";

export const CalibrationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
