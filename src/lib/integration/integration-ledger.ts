import { prisma } from "@/lib/prisma";

export const IntegrationLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const recordIntegrationEvents = async (...args: any[]) => ({});

export const getIntegrationLedger = async (...args: any[]) => ({});
