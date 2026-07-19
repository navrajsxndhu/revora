import { prisma } from "@/lib/prisma";

export const PlaybookEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPlaybookEngine = async (...args: any[]) => ({});
export const calculatePlaybookEngine = async (...args: any[]) => ({});
export const recordPlaybookEngineEvents = async (...args: any[]) => ({});
