import { prisma } from "@/lib/prisma";

export const AutomationLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getAutomationLedgerEngine = async (...args: any[]) => ({});
export const calculateAutomationLedgerEngine = async (...args: any[]) => ({});
export const recordAutomationLedgerEngineEvents = async (...args: any[]) => ({});
