import { prisma } from "@/lib/prisma";

export const InformationIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
