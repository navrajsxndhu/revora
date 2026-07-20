import { prisma } from "@/lib/prisma";

export const PromptEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validatePromptEngine = async (...args: any[]) => ({});
export const governPromptEngine = async (...args: any[]) => ({});
export const verifyPromptEngine = async (...args: any[]) => ({});
