import { prisma } from "@/lib/prisma";

export const PaymentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPaymentEngine = async (...args: any[]) => ({});
export const calculatePaymentEngine = async (...args: any[]) => ({});
export const recordPaymentEngineEvents = async (...args: any[]) => ({});
