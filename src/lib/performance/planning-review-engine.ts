import { prisma } from "@/lib/prisma";

export const PlanningReviewEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPlanningReviewEngine = async (...args: any[]) => ({});
export const calculatePlanningReviewEngine = async (...args: any[]) => ({});
export const recordPlanningReviewEngineEvents = async (...args: any[]) => ({});
