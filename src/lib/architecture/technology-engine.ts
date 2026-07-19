import { prisma } from "@/lib/prisma";

export const TechnologyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTechnologyEngine = async (...args: any[]) => ({});
export const calculateTechnologyEngine = async (...args: any[]) => ({});
export const recordTechnologyEngineEvents = async (...args: any[]) => ({});
