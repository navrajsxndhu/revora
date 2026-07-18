import { prisma } from "@/lib/prisma";

export const EndpointEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
