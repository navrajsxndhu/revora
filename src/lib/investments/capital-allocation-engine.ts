import { prisma } from "@/lib/prisma";

export const CapitalAllocationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCapitalAllocationEngine = async (...args: any[]) => ({});
export const calculateCapitalAllocationEngine = async (...args: any[]) => ({});
export const recordCapitalAllocationEngineEvents = async (...args: any[]) => ({});
