import { prisma } from "@/lib/prisma";

export const ReceiptEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getReceiptEngine = async (...args: any[]) => ({});
export const calculateReceiptEngine = async (...args: any[]) => ({});
export const recordReceiptEngineEvents = async (...args: any[]) => ({});
