import { prisma } from "@/lib/prisma";

export const PatentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPatentEngine = async (...args: any[]) => ({});
export const calculatePatentEngine = async (...args: any[]) => ({});
export const recordPatentEngineEvents = async (...args: any[]) => ({});
