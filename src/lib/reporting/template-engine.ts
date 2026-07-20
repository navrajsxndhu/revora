import { prisma } from "@/lib/prisma";

export const TemplateEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateTemplateEngine = async (...args: any[]) => ({});
export const governTemplateEngine = async (...args: any[]) => ({});
export const verifyTemplateEngine = async (...args: any[]) => ({});
