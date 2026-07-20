import { prisma } from "@/lib/prisma";

export const BiasEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateBiasEngine = async (...args: any[]) => ({});
export const governBiasEngine = async (...args: any[]) => ({});
export const verifyBiasEngine = async (...args: any[]) => ({});
