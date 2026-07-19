import { prisma } from "@/lib/prisma";

export const ObligationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getObligationEngine = async (...args: any[]) => ({});
export const calculateObligationEngine = async (...args: any[]) => ({});
export const recordObligationEngineEvents = async (...args: any[]) => ({});
