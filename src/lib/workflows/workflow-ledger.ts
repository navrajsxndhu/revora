import { prisma } from "@/lib/prisma";

export const WorkflowLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getWorkflowLedger = async (...args: any[]) => ({});
export const calculateWorkflowLedger = async (...args: any[]) => ({});
export const recordWorkflowLedgerEvents = async (...args: any[]) => ({});
