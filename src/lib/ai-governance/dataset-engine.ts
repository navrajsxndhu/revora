import { prisma } from "@/lib/prisma";

export const DatasetEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateDatasetEngine = async (...args: any[]) => ({});
export const governDatasetEngine = async (...args: any[]) => ({});
export const verifyDatasetEngine = async (...args: any[]) => ({});
