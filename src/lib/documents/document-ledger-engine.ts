import { prisma } from "@/lib/prisma";

export const DocumentLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDocumentLedgerEngine = async (...args: any[]) => ({});
export const calculateDocumentLedgerEngine = async (...args: any[]) => ({});
export const recordDocumentLedgerEngineEvents = async (...args: any[]) => ({});
