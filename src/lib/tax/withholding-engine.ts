import { prisma } from "@/lib/prisma";

export const WithholdingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getWithholdingEngine = async (...args: any[]) => ({});
export const calculateWithholdingEngine = async (...args: any[]) => ({});
export const recordWithholdingEngineEvents = async (...args: any[]) => ({});
