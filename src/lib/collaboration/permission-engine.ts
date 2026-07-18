import { prisma } from "@/lib/prisma";

export const PermissionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
