import { prisma } from "@/lib/prisma";

export const ExceptionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getExceptionEngine = async (...args: any[]) => ({});
export const calculateExceptionEngine = async (...args: any[]) => ({});
export const recordExceptionEngineEvents = async (...args: any[]) => ({});
