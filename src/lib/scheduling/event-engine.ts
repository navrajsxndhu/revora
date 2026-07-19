import { prisma } from "@/lib/prisma";

export const EventEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getEventEngine = async (...args: any[]) => ({});
export const calculateEventEngine = async (...args: any[]) => ({});
export const recordEventEngineEvents = async (...args: any[]) => ({});
