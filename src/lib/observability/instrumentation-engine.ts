import { prisma } from "@/lib/prisma";

export const InstrumentationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getInstrumentationEngine = async (...args: any[]) => ({});
export const calculateInstrumentationEngine = async (...args: any[]) => ({});
export const recordInstrumentationEngineEvents = async (...args: any[]) => ({});
