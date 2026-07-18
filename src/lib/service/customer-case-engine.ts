import { prisma } from "@/lib/prisma";

export const CustomerCaseEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCustomerCaseEngine = async (...args: any[]) => ({});
export const calculateCustomerCaseEngine = async (...args: any[]) => ({});
export const recordCustomerCaseEngineEvents = async (...args: any[]) => ({});
