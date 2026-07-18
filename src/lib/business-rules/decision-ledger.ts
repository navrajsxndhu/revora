import { prisma } from "@/lib/prisma";

export const DecisionLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDecisionLedger = async (...args: any[]) => ({});
export const calculateDecisionLedger = async (...args: any[]) => ({});
export const recordDecisionLedgerEvents = async (...args: any[]) => ({});
