import { prisma } from "@/lib/prisma";

export const ProtocolEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getProtocolEngine = async (...args: any[]) => ({});
export const calculateProtocolEngine = async (...args: any[]) => ({});
export const recordProtocolEngineEvents = async (...args: any[]) => ({});
