import { prisma } from "@/lib/prisma";

export const OperationsEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getOperationsEngine = async (...args: any[]) => ({});
export const calculateOperationsEngine = async (...args: any[]) => ({});
export const recordOperationsEngineEvents = async (...args: any[]) => ({});
