import { prisma } from "@/lib/prisma";

export const TerminationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTerminationEngine = async (...args: any[]) => ({});
export const calculateTerminationEngine = async (...args: any[]) => ({});
export const recordTerminationEngineEvents = async (...args: any[]) => ({});
