import { prisma } from "@/lib/prisma";

export const IntegrationIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const calculateIntegrationIndex = async (...args: any[]) => ({});
