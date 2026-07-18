import { prisma } from "@/lib/prisma";

export const WorkflowEngine = {
  getWorkflows: async (workspaceId: string) => {
    return prisma.orchestrationWorkflow.findMany({
      where: { workspaceId }
    });
  }
};
