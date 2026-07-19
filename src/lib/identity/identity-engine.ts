import { prisma } from "@/lib/prisma";

export const IdentityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getIdentityEngine = async (...args: any[]) => ({});
export const calculateIdentityEngine = async (...args: any[]) => ({});
export const recordIdentityEngineEvents = async (...args: any[]) => ({});
