import { prisma } from "@/lib/prisma";

export const ExecutiveReviewEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getExecutiveReviewEngine = async (...args: any[]) => ({});
export const calculateExecutiveReviewEngine = async (...args: any[]) => ({});
export const recordExecutiveReviewEngineEvents = async (...args: any[]) => ({});
