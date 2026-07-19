import { prisma } from "@/lib/prisma";

export const ObservabilityLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getObservabilityLedgerEngine = async (...args: any[]) => ({});
export const calculateObservabilityLedgerEngine = async (...args: any[]) => ({});
export const recordObservabilityLedgerEngineEvents = async (...args: any[]) => ({});
