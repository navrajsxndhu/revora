import { prisma } from "@/lib/prisma";

export const EnterpriseLegalEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
