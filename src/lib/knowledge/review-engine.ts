import { prisma } from "@/lib/prisma";

export const ReviewEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getReviewEngine = async (...args: any[]) => ({});
export const calculateReviewEngine = async (...args: any[]) => ({});
export const recordReviewEngineEvents = async (...args: any[]) => ({});
