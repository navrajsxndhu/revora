import { prisma } from "@/lib/prisma";

export const PreventiveMaintenanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPreventiveMaintenanceEngine = async (...args: any[]) => ({});
export const calculatePreventiveMaintenanceEngine = async (...args: any[]) => ({});
export const recordPreventiveMaintenanceEngineEvents = async (...args: any[]) => ({});
