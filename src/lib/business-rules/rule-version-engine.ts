import { prisma } from "@/lib/prisma";

export const RuleVersionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRuleVersionEngine = async (...args: any[]) => ({});
export const calculateRuleVersionEngine = async (...args: any[]) => ({});
export const recordRuleVersionEngineEvents = async (...args: any[]) => ({});
