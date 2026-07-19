import { prisma } from "@/lib/prisma";

export const ReadinessEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getReadinessEngine = async (...args: any[]) => ({});
export const calculateReadinessEngine = async (...args: any[]) => ({});
export const recordReadinessEngineEvents = async (...args: any[]) => ({});
