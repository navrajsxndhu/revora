import { prisma } from "@/lib/prisma";

export const WorkflowInstanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getWorkflowInstanceEngine = async (...args: any[]) => ({});
export const calculateWorkflowInstanceEngine = async (...args: any[]) => ({});
export const recordWorkflowInstanceEngineEvents = async (...args: any[]) => ({});
