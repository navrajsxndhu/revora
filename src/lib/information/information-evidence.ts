import { prisma } from "@/lib/prisma";

export const InformationEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
