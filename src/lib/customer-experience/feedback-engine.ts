import { prisma } from "@/lib/prisma";

export const FeedbackEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFeedbackEngine = async (...args: any[]) => ({});
export const calculateFeedbackEngine = async (...args: any[]) => ({});
export const recordFeedbackEngineEvents = async (...args: any[]) => ({});
