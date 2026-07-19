import { prisma } from "@/lib/prisma";

export const DeviationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDeviationEngine = async (...args: any[]) => ({});
export const calculateDeviationEngine = async (...args: any[]) => ({});
export const recordDeviationEngineEvents = async (...args: any[]) => ({});
