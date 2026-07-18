import { prisma } from "@/lib/prisma";

export const DepartmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
