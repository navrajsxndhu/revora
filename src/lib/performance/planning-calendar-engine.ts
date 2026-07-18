import { prisma } from "@/lib/prisma";

export const PlanningCalendarEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPlanningCalendarEngine = async (...args: any[]) => ({});
export const calculatePlanningCalendarEngine = async (...args: any[]) => ({});
export const recordPlanningCalendarEngineEvents = async (...args: any[]) => ({});
