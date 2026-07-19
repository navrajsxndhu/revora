import { prisma } from "@/lib/prisma";

export const PreferenceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPreferenceEngine = async (...args: any[]) => ({});
export const calculatePreferenceEngine = async (...args: any[]) => ({});
export const recordPreferenceEngineEvents = async (...args: any[]) => ({});
