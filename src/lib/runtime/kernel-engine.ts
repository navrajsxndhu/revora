import { prisma } from "@/lib/prisma";

export const KernelEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getKernelEngine = async (...args: any[]) => ({});
export const calculateKernelEngine = async (...args: any[]) => ({});
export const recordKernelEngineEvents = async (...args: any[]) => ({});
