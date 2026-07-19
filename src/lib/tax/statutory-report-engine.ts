import { prisma } from "@/lib/prisma";

export const StatutoryReportEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getStatutoryReportEngine = async (...args: any[]) => ({});
export const calculateStatutoryReportEngine = async (...args: any[]) => ({});
export const recordStatutoryReportEngineEvents = async (...args: any[]) => ({});
