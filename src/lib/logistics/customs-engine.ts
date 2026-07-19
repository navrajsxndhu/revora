import { prisma } from "@/lib/prisma";

export const CustomsEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCustomsEngine = async (...args: any[]) => ({});
export const calculateCustomsEngine = async (...args: any[]) => ({});
export const recordCustomsEngineEvents = async (...args: any[]) => ({});
