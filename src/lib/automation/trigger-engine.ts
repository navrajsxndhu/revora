import { prisma } from "@/lib/prisma";

export const TriggerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTriggerEngine = async (...args: any[]) => ({});
export const calculateTriggerEngine = async (...args: any[]) => ({});
export const recordTriggerEngineEvents = async (...args: any[]) => ({});
