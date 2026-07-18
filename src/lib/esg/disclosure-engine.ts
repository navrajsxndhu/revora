import { prisma } from "@/lib/prisma";

export const DisclosureEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
