import { prisma } from "@/lib/prisma";

export const ApiEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getApiEngine = async (...args: any[]) => ({});
export const calculateApiEngine = async (...args: any[]) => ({});
export const recordApiEngineEvents = async (...args: any[]) => ({});
