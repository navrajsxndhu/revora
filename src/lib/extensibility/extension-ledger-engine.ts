import { prisma } from "@/lib/prisma";

export const ExtensionLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getExtensionLedgerEngine = async (...args: any[]) => ({});
export const calculateExtensionLedgerEngine = async (...args: any[]) => ({});
export const recordExtensionLedgerEngineEvents = async (...args: any[]) => ({});
