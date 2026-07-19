import { prisma } from "@/lib/prisma";

export const ClassificationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getClassificationEngine = async (...args: any[]) => ({});
export const calculateClassificationEngine = async (...args: any[]) => ({});
export const validateClassificationEngine = async (...args: any[]) => ({});
