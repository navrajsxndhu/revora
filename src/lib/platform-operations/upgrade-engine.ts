import { prisma } from "@/lib/prisma";

export const UpgradeEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getUpgradeEngine = async (...args: any[]) => ({});
export const calculateUpgradeEngine = async (...args: any[]) => ({});
export const recordUpgradeEngineEvents = async (...args: any[]) => ({});
