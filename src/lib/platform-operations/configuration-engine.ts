import { prisma } from "@/lib/prisma";

export const ConfigurationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getConfigurationEngine = async (...args: any[]) => ({});
export const calculateConfigurationEngine = async (...args: any[]) => ({});
export const recordConfigurationEngineEvents = async (...args: any[]) => ({});
