import { prisma } from "@/lib/prisma";

export const FiscalCalendarEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFiscalCalendarEngine = async (...args: any[]) => ({});
export const calculateFiscalCalendarEngine = async (...args: any[]) => ({});
export const recordFiscalCalendarEngineEvents = async (...args: any[]) => ({});
