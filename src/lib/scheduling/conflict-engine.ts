import { prisma } from "@/lib/prisma";

export const ConflictEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getConflictEngine = async (...args: any[]) => ({});
export const calculateConflictEngine = async (...args: any[]) => ({});
export const recordConflictEngineEvents = async (...args: any[]) => ({});
