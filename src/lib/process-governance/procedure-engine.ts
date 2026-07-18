import { prisma } from "@/lib/prisma";

export const ProcedureEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
