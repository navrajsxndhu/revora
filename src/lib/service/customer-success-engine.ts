import { prisma } from "@/lib/prisma";

export const CustomerSuccessEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCustomerSuccessEngine = async (...args: any[]) => ({});
export const calculateCustomerSuccessEngine = async (...args: any[]) => ({});
export const recordCustomerSuccessEngineEvents = async (...args: any[]) => ({});
