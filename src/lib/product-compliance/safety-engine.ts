import { prisma } from "@/lib/prisma";

export const SafetyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSafetyEngine = async (...args: any[]) => ({});
export const calculateSafetyEngine = async (...args: any[]) => ({});
export const recordSafetyEngineEvents = async (...args: any[]) => ({});
