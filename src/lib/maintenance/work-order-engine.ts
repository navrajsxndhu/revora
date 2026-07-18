import { prisma } from "@/lib/prisma";

export const WorkOrderEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getWorkOrderEngine = async (...args: any[]) => ({});
export const calculateWorkOrderEngine = async (...args: any[]) => ({});
export const recordWorkOrderEngineEvents = async (...args: any[]) => ({});
