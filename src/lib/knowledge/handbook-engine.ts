import { prisma } from "@/lib/prisma";

export const HandbookEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getHandbookEngine = async (...args: any[]) => ({});
export const calculateHandbookEngine = async (...args: any[]) => ({});
export const recordHandbookEngineEvents = async (...args: any[]) => ({});
