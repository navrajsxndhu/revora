import { prisma } from "@/lib/prisma";

export const WriteoffEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getWriteoffEngine = async (...args: any[]) => ({});
export const calculateWriteoffEngine = async (...args: any[]) => ({});
export const recordWriteoffEngineEvents = async (...args: any[]) => ({});
