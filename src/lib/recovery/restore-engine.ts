import { prisma } from "@/lib/prisma";

export const RestoreEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRestoreEngine = async (...args: any[]) => ({});
export const calculateRestoreEngine = async (...args: any[]) => ({});
export const recordRestoreEngineEvents = async (...args: any[]) => ({});
