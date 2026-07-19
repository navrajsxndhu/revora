import { prisma } from "@/lib/prisma";

export const ChannelEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getChannelEngine = async (...args: any[]) => ({});
export const calculateChannelEngine = async (...args: any[]) => ({});
export const recordChannelEngineEvents = async (...args: any[]) => ({});
