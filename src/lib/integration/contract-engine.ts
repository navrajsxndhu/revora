import { prisma } from "@/lib/prisma";

export const ContractEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateContractEngine = async (...args: any[]) => ({});
export const governContractEngine = async (...args: any[]) => ({});
export const verifyContractEngine = async (...args: any[]) => ({});
