import { prisma } from "@/lib/prisma";

export const SafetyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateSafetyEngine = async (...args: any[]) => ({});
export const governSafetyEngine = async (...args: any[]) => ({});
export const verifySafetyEngine = async (...args: any[]) => ({});
