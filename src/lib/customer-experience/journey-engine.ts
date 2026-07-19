import { prisma } from "@/lib/prisma";

export const JourneyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getJourneyEngine = async (...args: any[]) => ({});
export const calculateJourneyEngine = async (...args: any[]) => ({});
export const recordJourneyEngineEvents = async (...args: any[]) => ({});
