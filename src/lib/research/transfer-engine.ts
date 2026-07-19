import { prisma } from "@/lib/prisma";

export const TransferEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTransferEngine = async (...args: any[]) => ({});
export const calculateTransferEngine = async (...args: any[]) => ({});
export const recordTransferEngineEvents = async (...args: any[]) => ({});
