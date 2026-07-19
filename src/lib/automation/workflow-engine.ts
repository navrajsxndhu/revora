import { prisma } from "@/lib/prisma";

export const WorkflowEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getWorkflowEngine = async (...args: any[]) => ({});
export const calculateWorkflowEngine = async (...args: any[]) => ({});
export const recordWorkflowEngineEvents = async (...args: any[]) => ({});
