import { prisma } from "@/lib/prisma";

export const MetadataEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateMetadataEngine = async (...args: any[]) => ({});
export const governMetadataEngine = async (...args: any[]) => ({});
export const verifyMetadataEngine = async (...args: any[]) => ({});
