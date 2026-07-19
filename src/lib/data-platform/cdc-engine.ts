import { prisma } from "@/lib/prisma";

export const CdcEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCdcEngine = async (...args: any[]) => ({});
export const calculateCdcEngine = async (...args: any[]) => ({});
export const recordCdcEngineEvents = async (...args: any[]) => ({});
