import { prisma } from "@/lib/prisma";

export const SparePartsEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSparePartsEngine = async (...args: any[]) => ({});
export const calculateSparePartsEngine = async (...args: any[]) => ({});
export const recordSparePartsEngineEvents = async (...args: any[]) => ({});
