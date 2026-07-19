import { prisma } from "@/lib/prisma";

export const AlertEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getAlertEngine = async (...args: any[]) => ({});
export const calculateAlertEngine = async (...args: any[]) => ({});
export const recordAlertEngineEvents = async (...args: any[]) => ({});
