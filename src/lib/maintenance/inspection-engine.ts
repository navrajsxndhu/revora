import { prisma } from "@/lib/prisma";

export const InspectionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getInspectionEngine = async (...args: any[]) => ({});
export const calculateInspectionEngine = async (...args: any[]) => ({});
export const recordInspectionEngineEvents = async (...args: any[]) => ({});
