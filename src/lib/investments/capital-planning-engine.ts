import { prisma } from "@/lib/prisma";

export const CapitalPlanningEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCapitalPlanningEngine = async (...args: any[]) => ({});
export const calculateCapitalPlanningEngine = async (...args: any[]) => ({});
export const recordCapitalPlanningEngineEvents = async (...args: any[]) => ({});
