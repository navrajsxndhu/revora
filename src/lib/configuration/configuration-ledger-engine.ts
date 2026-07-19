import { prisma } from "@/lib/prisma";

export const ConfigurationLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getConfigurationLedgerEngine = async (...args: any[]) => ({});
export const calculateConfigurationLedgerEngine = async (...args: any[]) => ({});
export const recordConfigurationLedgerEngineEvents = async (...args: any[]) => ({});
