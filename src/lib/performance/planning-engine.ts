import { prisma } from "@/lib/prisma";

export const PlanningEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPlanningEngine = async (...args: any[]) => ({});
export const calculatePlanningEngine = async (...args: any[]) => ({});
export const recordPlanningEngineEvents = async (...args: any[]) => ({});
