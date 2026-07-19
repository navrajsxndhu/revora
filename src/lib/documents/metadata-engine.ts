import { prisma } from "@/lib/prisma";

export const MetadataEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getMetadataEngine = async (...args: any[]) => ({});
export const calculateMetadataEngine = async (...args: any[]) => ({});
export const recordMetadataEngineEvents = async (...args: any[]) => ({});
