import { prisma } from "@/lib/prisma";

export const WorkforceLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
