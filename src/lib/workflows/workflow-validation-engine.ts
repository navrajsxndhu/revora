import { prisma } from "@/lib/prisma";

export const WorkflowValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getWorkflowValidationEngine = async (...args: any[]) => ({});
export const calculateWorkflowValidationEngine = async (...args: any[]) => ({});
export const recordWorkflowValidationEngineEvents = async (...args: any[]) => ({});
