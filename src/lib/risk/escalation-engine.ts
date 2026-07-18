import { prisma } from "@/lib/prisma";

export const EscalationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
