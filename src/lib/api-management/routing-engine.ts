import { prisma } from "@/lib/prisma";

export const RoutingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRoutingEngine = async (...args: any[]) => ({});
export const calculateRoutingEngine = async (...args: any[]) => ({});
export const recordRoutingEngineEvents = async (...args: any[]) => ({});
