import { prisma } from "@/lib/prisma";

export const RefundEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRefundEngine = async (...args: any[]) => ({});
export const calculateRefundEngine = async (...args: any[]) => ({});
export const recordRefundEngineEvents = async (...args: any[]) => ({});
