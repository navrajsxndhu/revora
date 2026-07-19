import { prisma } from "@/lib/prisma";

export const PaymentAllocationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPaymentAllocationEngine = async (...args: any[]) => ({});
export const calculatePaymentAllocationEngine = async (...args: any[]) => ({});
export const recordPaymentAllocationEngineEvents = async (...args: any[]) => ({});
