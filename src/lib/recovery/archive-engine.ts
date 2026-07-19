import { prisma } from "@/lib/prisma";

export const ArchiveEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getArchiveEngine = async (...args: any[]) => ({});
export const calculateArchiveEngine = async (...args: any[]) => ({});
export const recordArchiveEngineEvents = async (...args: any[]) => ({});
