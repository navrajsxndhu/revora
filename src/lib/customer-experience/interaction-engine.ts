import { prisma } from "@/lib/prisma";

export const InteractionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getInteractionEngine = async (...args: any[]) => ({});
export const calculateInteractionEngine = async (...args: any[]) => ({});
export const recordInteractionEngineEvents = async (...args: any[]) => ({});
