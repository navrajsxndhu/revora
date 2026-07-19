import { prisma } from "@/lib/prisma";

export const TransportationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTransportationEngine = async (...args: any[]) => ({});
export const calculateTransportationEngine = async (...args: any[]) => ({});
export const recordTransportationEngineEvents = async (...args: any[]) => ({});
