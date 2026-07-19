import { prisma } from "@/lib/prisma";

export const ManifestEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getManifestEngine = async (...args: any[]) => ({});
export const calculateManifestEngine = async (...args: any[]) => ({});
export const recordManifestEngineEvents = async (...args: any[]) => ({});
