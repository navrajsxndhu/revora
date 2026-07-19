import { prisma } from "@/lib/prisma";

export const OverrideEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getOverrideEngine = async (...args: any[]) => ({});
export const calculateOverrideEngine = async (...args: any[]) => ({});
export const recordOverrideEngineEvents = async (...args: any[]) => ({});
