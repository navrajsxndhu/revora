import { prisma } from "@/lib/prisma";

export const ValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getValidationEngine = async (...args: any[]) => ({});
export const calculateValidationEngine = async (...args: any[]) => ({});
export const recordValidationEngineEvents = async (...args: any[]) => ({});
