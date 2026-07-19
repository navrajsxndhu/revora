import { prisma } from "@/lib/prisma";

export const LoggingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getLoggingEngine = async (...args: any[]) => ({});
export const calculateLoggingEngine = async (...args: any[]) => ({});
export const recordLoggingEngineEvents = async (...args: any[]) => ({});
