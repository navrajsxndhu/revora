import { prisma } from "@/lib/prisma";

export const RenewalEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRenewalEngine = async (...args: any[]) => ({});
export const calculateRenewalEngine = async (...args: any[]) => ({});
export const recordRenewalEngineEvents = async (...args: any[]) => ({});
