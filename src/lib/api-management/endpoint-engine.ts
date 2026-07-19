import { prisma } from "@/lib/prisma";

export const EndpointEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getEndpointEngine = async (...args: any[]) => ({});
export const calculateEndpointEngine = async (...args: any[]) => ({});
export const recordEndpointEngineEvents = async (...args: any[]) => ({});
