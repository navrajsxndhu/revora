import { prisma } from "@/lib/prisma";

export const PipelineEngine = {
  getPipelines: async (workspaceId: string) => {
    return prisma.executionPipeline.findMany({
      where: { workspaceId }
    });
  }
};
