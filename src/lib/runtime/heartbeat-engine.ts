import { prisma } from "@/lib/prisma";

export const HeartbeatEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getHeartbeatEngine = async (...args: any[]) => ({});
export const calculateHeartbeatEngine = async (...args: any[]) => ({});
export const recordHeartbeatEngineEvents = async (...args: any[]) => ({});
