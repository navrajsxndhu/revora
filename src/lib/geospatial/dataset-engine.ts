import { prisma } from "@/lib/prisma";

export const DatasetEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDatasetEngine = async (...args: any[]) => ({});
export const calculateDatasetEngine = async (...args: any[]) => ({});
export const validateDatasetEngine = async (...args: any[]) => ({});
