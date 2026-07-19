import { prisma } from "@/lib/prisma";

export const AmendmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getAmendmentEngine = async (...args: any[]) => ({});
export const calculateAmendmentEngine = async (...args: any[]) => ({});
export const recordAmendmentEngineEvents = async (...args: any[]) => ({});
