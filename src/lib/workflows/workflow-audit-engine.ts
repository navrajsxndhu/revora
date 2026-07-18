import { prisma } from "@/lib/prisma";

export const WorkflowAuditEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getWorkflowAuditEngine = async (...args: any[]) => ({});
export const calculateWorkflowAuditEngine = async (...args: any[]) => ({});
export const recordWorkflowAuditEngineEvents = async (...args: any[]) => ({});
