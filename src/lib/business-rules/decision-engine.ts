import { prisma } from "@/lib/prisma";

export const DecisionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDecisionEngine = async (...args: any[]) => ({});
export const calculateDecisionEngine = async (...args: any[]) => ({});
export const recordDecisionEngineEvents = async (...args: any[]) => ({});
