import { prisma } from "@/lib/prisma";

export const ReplicationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getReplicationEngine = async (...args: any[]) => ({});
export const calculateReplicationEngine = async (...args: any[]) => ({});
export const recordReplicationEngineEvents = async (...args: any[]) => ({});
