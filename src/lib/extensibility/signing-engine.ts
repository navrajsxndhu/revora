import { prisma } from "@/lib/prisma";

export const SigningEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSigningEngine = async (...args: any[]) => ({});
export const calculateSigningEngine = async (...args: any[]) => ({});
export const recordSigningEngineEvents = async (...args: any[]) => ({});
