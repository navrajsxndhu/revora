import { prisma } from "@/lib/prisma";

export const CapabilityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCapabilityEngine = async (...args: any[]) => ({});
export const calculateCapabilityEngine = async (...args: any[]) => ({});
export const recordCapabilityEngineEvents = async (...args: any[]) => ({});
