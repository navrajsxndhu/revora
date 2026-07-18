import { prisma } from "@/lib/prisma";

export const EndpointSecurityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
