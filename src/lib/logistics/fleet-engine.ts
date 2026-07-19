import { prisma } from "@/lib/prisma";

export const FleetEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFleetEngine = async (...args: any[]) => ({});
export const calculateFleetEngine = async (...args: any[]) => ({});
export const recordFleetEngineEvents = async (...args: any[]) => ({});
