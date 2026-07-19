import { prisma } from "@/lib/prisma";

export const RegulatoryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRegulatoryEngine = async (...args: any[]) => ({});
export const calculateRegulatoryEngine = async (...args: any[]) => ({});
export const recordRegulatoryEngineEvents = async (...args: any[]) => ({});
