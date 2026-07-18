import { prisma } from "@/lib/prisma";

export const FxExposureEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFxExposureEngine = async (...args: any[]) => ({});
export const calculateFxExposureEngine = async (...args: any[]) => ({});
export const recordFxExposureEngineEvents = async (...args: any[]) => ({});
