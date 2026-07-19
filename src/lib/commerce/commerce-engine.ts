import { prisma } from "@/lib/prisma";

export const CommerceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCommerceEngine = async (...args: any[]) => ({});
export const calculateCommerceEngine = async (...args: any[]) => ({});
export const recordCommerceEngineEvents = async (...args: any[]) => ({});
