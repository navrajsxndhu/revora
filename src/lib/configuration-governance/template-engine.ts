import { prisma } from "@/lib/prisma";

export const TemplateEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
