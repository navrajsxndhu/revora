import { prisma } from "@/lib/prisma";

export const WorkflowEngine = {
  getWorkflows: async (workspaceId?: string) => {
    return prisma.operationalWorkflowExecution.findMany({
      where: { workspaceId }
    });
  }
};

export async function getWorkflowHistory(workspaceId: string, id?: string) {
  return prisma.operationalWorkflowExecution.findMany({
    where: { workspaceId }
  });
}

export async function orchestrateWorkflow(workspaceId: string, id: string, data?: any) {
  return prisma.operationalWorkflowExecution.create({
    data: {
      workspaceId,
      workflowId: id,
      status: "EXECUTING",
      startTime: new Date().toISOString(),
      executionData: "{}"
    } as any
  });
}
