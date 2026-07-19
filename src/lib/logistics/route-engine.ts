import { prisma } from "@/lib/prisma";

export const RouteEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRouteEngine = async (...args: any[]) => ({});
export const calculateRouteEngine = async (...args: any[]) => ({});
export const recordRouteEngineEvents = async (...args: any[]) => ({});
