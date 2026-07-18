import { prisma } from "@/lib/prisma";

export const EscalationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getEscalationEngine = async (...args: any[]) => ({});
export const calculateEscalationEngine = async (...args: any[]) => ({});
export const recordEscalationEngineEvents = async (...args: any[]) => ({});
