import { prisma } from "@/lib/prisma";

export const ModelEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateModelEngine = async (...args: any[]) => ({});
export const governModelEngine = async (...args: any[]) => ({});
export const verifyModelEngine = async (...args: any[]) => ({});
