import { prisma } from "@/lib/prisma";

export const ActivationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getActivationEngine = async (...args: any[]) => ({});
export const calculateActivationEngine = async (...args: any[]) => ({});
export const recordActivationEngineEvents = async (...args: any[]) => ({});
