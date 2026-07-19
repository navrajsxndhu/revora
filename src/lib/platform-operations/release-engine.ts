import { prisma } from "@/lib/prisma";

export const ReleaseEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getReleaseEngine = async (...args: any[]) => ({});
export const calculateReleaseEngine = async (...args: any[]) => ({});
export const recordReleaseEngineEvents = async (...args: any[]) => ({});
