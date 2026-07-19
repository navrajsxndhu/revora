import { prisma } from "@/lib/prisma";

export const AccessEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getAccessEngine = async (...args: any[]) => ({});
export const calculateAccessEngine = async (...args: any[]) => ({});
export const recordAccessEngineEvents = async (...args: any[]) => ({});
