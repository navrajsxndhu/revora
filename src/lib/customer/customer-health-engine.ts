import { prisma } from "@/lib/prisma";

export const CustomerHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
