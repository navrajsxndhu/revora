import { prisma } from "@/lib/prisma";

export const IntellectualPropertyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
