import { prisma } from "@/lib/prisma";

export const VaultEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getVaultEngine = async (...args: any[]) => ({});
export const calculateVaultEngine = async (...args: any[]) => ({});
export const recordVaultEngineEvents = async (...args: any[]) => ({});
