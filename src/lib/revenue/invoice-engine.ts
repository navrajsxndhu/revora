import { prisma } from "@/lib/prisma";

export const InvoiceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getInvoiceEngine = async (...args: any[]) => ({});
export const calculateInvoiceEngine = async (...args: any[]) => ({});
export const recordInvoiceEngineEvents = async (...args: any[]) => ({});
