import { prisma } from "@/lib/prisma";

export const FabricEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFabricEngine = async (...args: any[]) => ({});
export const calculateFabricEngine = async (...args: any[]) => ({});
export const recordFabricEngineEvents = async (...args: any[]) => ({});
