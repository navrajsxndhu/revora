import { prisma } from "@/lib/prisma";

export const SpecificationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSpecificationEngine = async (...args: any[]) => ({});
export const calculateSpecificationEngine = async (...args: any[]) => ({});
export const recordSpecificationEngineEvents = async (...args: any[]) => ({});
