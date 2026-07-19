import { prisma } from "@/lib/prisma";

export const StateEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getStateEngine = async (...args: any[]) => ({});
export const calculateStateEngine = async (...args: any[]) => ({});
export const recordStateEngineEvents = async (...args: any[]) => ({});
