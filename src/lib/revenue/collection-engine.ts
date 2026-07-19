import { prisma } from "@/lib/prisma";

export const CollectionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCollectionEngine = async (...args: any[]) => ({});
export const calculateCollectionEngine = async (...args: any[]) => ({});
export const recordCollectionEngineEvents = async (...args: any[]) => ({});
