import { prisma } from "@/lib/prisma";

export const ProcedureEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getProcedureEngine = async (...args: any[]) => ({});
export const calculateProcedureEngine = async (...args: any[]) => ({});
export const recordProcedureEngineEvents = async (...args: any[]) => ({});
