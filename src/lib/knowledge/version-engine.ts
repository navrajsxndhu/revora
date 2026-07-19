import { prisma } from "@/lib/prisma";

export const VersionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getVersionEngine = async (...args: any[]) => ({});
export const calculateVersionEngine = async (...args: any[]) => ({});
export const recordVersionEngineEvents = async (...args: any[]) => ({});
