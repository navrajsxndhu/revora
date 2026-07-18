import { prisma } from "@/lib/prisma";

export const EligibilityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getEligibilityEngine = async (...args: any[]) => ({});
export const calculateEligibilityEngine = async (...args: any[]) => ({});
export const recordEligibilityEngineEvents = async (...args: any[]) => ({});
