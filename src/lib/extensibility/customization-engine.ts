import { prisma } from "@/lib/prisma";

export const CustomizationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCustomizationEngine = async (...args: any[]) => ({});
export const calculateCustomizationEngine = async (...args: any[]) => ({});
export const recordCustomizationEngineEvents = async (...args: any[]) => ({});
