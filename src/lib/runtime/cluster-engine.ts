import { prisma } from "@/lib/prisma";

export const ClusterEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getClusterEngine = async (...args: any[]) => ({});
export const calculateClusterEngine = async (...args: any[]) => ({});
export const recordClusterEngineEvents = async (...args: any[]) => ({});
