import { prisma } from "@/lib/prisma";

export const FeatureFlagEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFeatureFlagEngine = async (...args: any[]) => ({});
export const calculateFeatureFlagEngine = async (...args: any[]) => ({});
export const recordFeatureFlagEngineEvents = async (...args: any[]) => ({});
