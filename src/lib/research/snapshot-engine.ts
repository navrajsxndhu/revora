import { prisma } from "@/lib/prisma";

export const SnapshotEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSnapshotEngine = async (...args: any[]) => ({});
export const calculateSnapshotEngine = async (...args: any[]) => ({});
export const recordSnapshotEngineEvents = async (...args: any[]) => ({});
