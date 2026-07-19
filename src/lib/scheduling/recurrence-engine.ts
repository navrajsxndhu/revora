import { prisma } from "@/lib/prisma";

export const RecurrenceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRecurrenceEngine = async (...args: any[]) => ({});
export const calculateRecurrenceEngine = async (...args: any[]) => ({});
export const recordRecurrenceEngineEvents = async (...args: any[]) => ({});
