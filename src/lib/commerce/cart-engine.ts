import { prisma } from "@/lib/prisma";

export const CartEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCartEngine = async (...args: any[]) => ({});
export const calculateCartEngine = async (...args: any[]) => ({});
export const recordCartEngineEvents = async (...args: any[]) => ({});
