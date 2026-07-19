import { prisma } from "@/lib/prisma";

export const AutomationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getAutomationEngine = async (...args: any[]) => ({});
export const calculateAutomationEngine = async (...args: any[]) => ({});
export const recordAutomationEngineEvents = async (...args: any[]) => ({});
