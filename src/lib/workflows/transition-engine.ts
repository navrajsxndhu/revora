import { prisma } from "@/lib/prisma";

export const TransitionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTransitionEngine = async (...args: any[]) => ({});
export const calculateTransitionEngine = async (...args: any[]) => ({});
export const recordTransitionEngineEvents = async (...args: any[]) => ({});
