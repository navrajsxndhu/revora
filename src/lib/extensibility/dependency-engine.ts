import { prisma } from "@/lib/prisma";

export const DependencyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDependencyEngine = async (...args: any[]) => ({});
export const calculateDependencyEngine = async (...args: any[]) => ({});
export const recordDependencyEngineEvents = async (...args: any[]) => ({});
