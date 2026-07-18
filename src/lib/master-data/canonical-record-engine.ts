import { prisma } from "@/lib/prisma";

export const CanonicalRecordEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
