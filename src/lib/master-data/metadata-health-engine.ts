import { prisma } from "@/lib/prisma";

export const MetadataHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
