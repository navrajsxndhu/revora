import { prisma } from "@/lib/prisma";

export const BankAccountEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getBankAccountEngine = async (...args: any[]) => ({});
export const calculateBankAccountEngine = async (...args: any[]) => ({});
export const recordBankAccountEngineEvents = async (...args: any[]) => ({});
