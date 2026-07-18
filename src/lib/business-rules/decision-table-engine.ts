import { prisma } from "@/lib/prisma";

export const DecisionTableEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDecisionTableEngine = async (...args: any[]) => ({});
export const calculateDecisionTableEngine = async (...args: any[]) => ({});
export const recordDecisionTableEngineEvents = async (...args: any[]) => ({});
