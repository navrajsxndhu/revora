import { prisma } from "@/lib/prisma";

export const CommunicationLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCommunicationLedgerEngine = async (...args: any[]) => ({});
export const calculateCommunicationLedgerEngine = async (...args: any[]) => ({});
export const recordCommunicationLedgerEngineEvents = async (...args: any[]) => ({});
