import { prisma } from "@/lib/prisma";

export const BusinessRuleEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getBusinessRuleEngine = async (...args: any[]) => ({});
export const calculateBusinessRuleEngine = async (...args: any[]) => ({});
export const recordBusinessRuleEngineEvents = async (...args: any[]) => ({});
