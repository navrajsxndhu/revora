import { prisma } from "@/lib/prisma";

export const MaintenanceLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getMaintenanceLedger = async (...args: any[]) => ({});
export const calculateMaintenanceLedger = async (...args: any[]) => ({});
export const recordMaintenanceLedgerEvents = async (...args: any[]) => ({});
