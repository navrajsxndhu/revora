import { prisma } from "@/lib/prisma";

export const NegotiationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getNegotiationEngine = async (...args: any[]) => ({});
export const calculateNegotiationEngine = async (...args: any[]) => ({});
export const recordNegotiationEngineEvents = async (...args: any[]) => ({});
