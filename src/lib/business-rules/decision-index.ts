import { prisma } from "@/lib/prisma";

export const DecisionIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDecisionIndex = async (...args: any[]) => ({});
export const calculateDecisionIndex = async (...args: any[]) => ({});
export const recordDecisionIndexEvents = async (...args: any[]) => ({});
