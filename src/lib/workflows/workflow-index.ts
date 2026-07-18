import { prisma } from "@/lib/prisma";

export const WorkflowIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getWorkflowIndex = async (...args: any[]) => ({});
export const calculateWorkflowIndex = async (...args: any[]) => ({});
export const recordWorkflowIndexEvents = async (...args: any[]) => ({});
