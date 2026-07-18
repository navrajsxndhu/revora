import { prisma } from "@/lib/prisma";

export const CalculationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCalculationEngine = async (...args: any[]) => ({});
export const calculateCalculationEngine = async (...args: any[]) => ({});
export const recordCalculationEngineEvents = async (...args: any[]) => ({});
