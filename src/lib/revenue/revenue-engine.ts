import { prisma } from "@/lib/prisma";

export const RevenueEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRevenueEngine = async (...args: any[]) => ({});
export const calculateRevenueEngine = async (...args: any[]) => ({});
export const recordRevenueEngineEvents = async (...args: any[]) => ({});
