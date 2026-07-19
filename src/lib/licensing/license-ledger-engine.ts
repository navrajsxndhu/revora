import { prisma } from "@/lib/prisma";

export const LicenseLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getLicenseLedgerEngine = async (...args: any[]) => ({});
export const calculateLicenseLedgerEngine = async (...args: any[]) => ({});
export const recordLicenseLedgerEngineEvents = async (...args: any[]) => ({});
