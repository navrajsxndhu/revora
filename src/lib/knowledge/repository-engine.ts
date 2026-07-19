import { prisma } from "@/lib/prisma";

export const RepositoryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRepositoryEngine = async (...args: any[]) => ({});
export const calculateRepositoryEngine = async (...args: any[]) => ({});
export const recordRepositoryEngineEvents = async (...args: any[]) => ({});
