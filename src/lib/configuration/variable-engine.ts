import { prisma } from "@/lib/prisma";

export const VariableEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getVariableEngine = async (...args: any[]) => ({});
export const calculateVariableEngine = async (...args: any[]) => ({});
export const recordVariableEngineEvents = async (...args: any[]) => ({});
