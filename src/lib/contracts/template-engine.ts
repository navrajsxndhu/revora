import { prisma } from "@/lib/prisma";

export const TemplateEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTemplateEngine = async (...args: any[]) => ({});
export const calculateTemplateEngine = async (...args: any[]) => ({});
export const recordTemplateEngineEvents = async (...args: any[]) => ({});
