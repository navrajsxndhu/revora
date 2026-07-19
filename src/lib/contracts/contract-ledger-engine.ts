import { prisma } from "@/lib/prisma";

export const ContractLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getContractLedgerEngine = async (...args: any[]) => ({});
export const calculateContractLedgerEngine = async (...args: any[]) => ({});
export const recordContractLedgerEngineEvents = async (...args: any[]) => ({});
