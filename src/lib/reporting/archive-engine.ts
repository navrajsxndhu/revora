import { prisma } from "@/lib/prisma";

export const ArchiveEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateArchiveEngine = async (...args: any[]) => ({});
export const governArchiveEngine = async (...args: any[]) => ({});
export const verifyArchiveEngine = async (...args: any[]) => ({});
