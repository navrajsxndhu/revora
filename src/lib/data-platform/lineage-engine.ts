import { prisma } from "@/lib/prisma";

export const LineageEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getLineageEngine = async (...args: any[]) => ({});
export const calculateLineageEngine = async (...args: any[]) => ({});
export const recordLineageEngineEvents = async (...args: any[]) => ({});
