import { prisma } from "@/lib/prisma";

export const TransformationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTransformationEngine = async (...args: any[]) => ({});
export const calculateTransformationEngine = async (...args: any[]) => ({});
export const recordTransformationEngineEvents = async (...args: any[]) => ({});
