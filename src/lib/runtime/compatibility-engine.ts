import { prisma } from "@/lib/prisma";

export const CompatibilityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCompatibilityEngine = async (...args: any[]) => ({});
export const calculateCompatibilityEngine = async (...args: any[]) => ({});
export const recordCompatibilityEngineEvents = async (...args: any[]) => ({});
