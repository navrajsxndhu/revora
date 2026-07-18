import { prisma } from "@/lib/prisma";

export const ServiceLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getServiceLedger = async (...args: any[]) => ({});
export const calculateServiceLedger = async (...args: any[]) => ({});
export const recordServiceLedgerEvents = async (...args: any[]) => ({});
