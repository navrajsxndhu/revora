import { prisma } from "@/lib/prisma";

export const PublicationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPublicationEngine = async (...args: any[]) => ({});
export const calculatePublicationEngine = async (...args: any[]) => ({});
export const recordPublicationEngineEvents = async (...args: any[]) => ({});
