import { prisma } from "@/lib/prisma";

export const ReceivableEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getReceivableEngine = async (...args: any[]) => ({});
export const calculateReceivableEngine = async (...args: any[]) => ({});
export const recordReceivableEngineEvents = async (...args: any[]) => ({});
