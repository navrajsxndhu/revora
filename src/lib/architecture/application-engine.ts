import { prisma } from "@/lib/prisma";

export const ApplicationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getApplicationEngine = async (...args: any[]) => ({});
export const calculateApplicationEngine = async (...args: any[]) => ({});
export const recordApplicationEngineEvents = async (...args: any[]) => ({});
