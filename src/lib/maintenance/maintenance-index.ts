import { prisma } from "@/lib/prisma";

export const MaintenanceIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getMaintenanceIndex = async (...args: any[]) => ({});
export const calculateMaintenanceIndex = async (...args: any[]) => ({});
export const recordMaintenanceIndexEvents = async (...args: any[]) => ({});
