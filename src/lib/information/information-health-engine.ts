import { prisma } from "@/lib/prisma";

export const InformationHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
