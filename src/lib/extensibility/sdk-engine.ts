import { prisma } from "@/lib/prisma";

export const SdkEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSdkEngine = async (...args: any[]) => ({});
export const calculateSdkEngine = async (...args: any[]) => ({});
export const recordSdkEngineEvents = async (...args: any[]) => ({});
