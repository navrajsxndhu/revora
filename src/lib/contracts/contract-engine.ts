import { prisma } from "@/lib/prisma";

export const ContractEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getContractEngine = async (...args: any[]) => ({});
export const calculateContractEngine = async (...args: any[]) => ({});
export const recordContractEngineEvents = async (...args: any[]) => ({});
