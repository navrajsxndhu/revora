import { prisma } from "@/lib/prisma";

export const InstallationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getInstallationEngine = async (...args: any[]) => ({});
export const calculateInstallationEngine = async (...args: any[]) => ({});
export const recordInstallationEngineEvents = async (...args: any[]) => ({});
