import { prisma } from "@/lib/prisma";

export const RecordsEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRecordsEngine = async (...args: any[]) => ({});
export const calculateRecordsEngine = async (...args: any[]) => ({});
export const recordRecordsEngineEvents = async (...args: any[]) => ({});
