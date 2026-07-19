import { prisma } from "@/lib/prisma";

export const PrototypeEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPrototypeEngine = async (...args: any[]) => ({});
export const calculatePrototypeEngine = async (...args: any[]) => ({});
export const recordPrototypeEngineEvents = async (...args: any[]) => ({});
