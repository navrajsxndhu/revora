import { prisma } from "@/lib/prisma";

export const SurveillanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSurveillanceEngine = async (...args: any[]) => ({});
export const calculateSurveillanceEngine = async (...args: any[]) => ({});
export const recordSurveillanceEngineEvents = async (...args: any[]) => ({});
