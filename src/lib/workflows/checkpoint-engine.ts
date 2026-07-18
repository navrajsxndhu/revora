import { prisma } from "@/lib/prisma";

export const CheckpointEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCheckpointEngine = async (...args: any[]) => ({});
export const calculateCheckpointEngine = async (...args: any[]) => ({});
export const recordCheckpointEngineEvents = async (...args: any[]) => ({});
