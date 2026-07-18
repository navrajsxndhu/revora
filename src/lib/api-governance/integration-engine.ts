import { prisma } from "@/lib/prisma";

export const IntegrationEngine = {
  getIntegrations: async (workspaceId: string) => {
    return prisma.integrationFlow.findMany({ where: { workspaceId } });
  }
};
