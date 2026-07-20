import { prisma } from "@/lib/prisma";

export const ProviderEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateProviderEngine = async (...args: any[]) => ({});
export const governProviderEngine = async (...args: any[]) => ({});
export const verifyProviderEngine = async (...args: any[]) => ({});
