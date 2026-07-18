import { prisma } from "@/lib/prisma";

export const TargetEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTargetEngine = async (...args: any[]) => ({});
export const calculateTargetEngine = async (...args: any[]) => ({});
export const recordTargetEngineEvents = async (...args: any[]) => ({});
