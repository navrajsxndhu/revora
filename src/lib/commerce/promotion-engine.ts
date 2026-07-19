import { prisma } from "@/lib/prisma";

export const PromotionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPromotionEngine = async (...args: any[]) => ({});
export const calculatePromotionEngine = async (...args: any[]) => ({});
export const recordPromotionEngineEvents = async (...args: any[]) => ({});
