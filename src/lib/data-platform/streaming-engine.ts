import { prisma } from "@/lib/prisma";

export const StreamingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getStreamingEngine = async (...args: any[]) => ({});
export const calculateStreamingEngine = async (...args: any[]) => ({});
export const recordStreamingEngineEvents = async (...args: any[]) => ({});
