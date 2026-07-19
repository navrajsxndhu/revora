import { prisma } from "@/lib/prisma";

export const PolicyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPolicyEngine = async (...args: any[]) => ({});
export const calculatePolicyEngine = async (...args: any[]) => ({});
export const recordPolicyEngineEvents = async (...args: any[]) => ({});
