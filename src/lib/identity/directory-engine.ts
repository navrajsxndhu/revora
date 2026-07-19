import { prisma } from "@/lib/prisma";

export const DirectoryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDirectoryEngine = async (...args: any[]) => ({});
export const calculateDirectoryEngine = async (...args: any[]) => ({});
export const recordDirectoryEngineEvents = async (...args: any[]) => ({});
