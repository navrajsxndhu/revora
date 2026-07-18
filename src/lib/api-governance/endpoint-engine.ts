import { prisma } from "@/lib/prisma";

export const EndpointEngine = {
  getEndpoints: async (workspaceId: string) => {
    return prisma.apiEndpoint.findMany({ where: { workspaceId } });
  }
};
