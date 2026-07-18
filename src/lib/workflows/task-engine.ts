import { prisma } from "@/lib/prisma";

export const TaskEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTaskEngine = async (...args: any[]) => ({});
export const calculateTaskEngine = async (...args: any[]) => ({});
export const recordTaskEngineEvents = async (...args: any[]) => ({});
