import { prisma } from "@/lib/prisma";

export const MaintenanceProgramEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getMaintenanceProgramEngine = async (...args: any[]) => ({});
export const calculateMaintenanceProgramEngine = async (...args: any[]) => ({});
export const recordMaintenanceProgramEngineEvents = async (...args: any[]) => ({});
