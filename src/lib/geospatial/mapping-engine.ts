import { prisma } from "@/lib/prisma";

export const MappingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getMappingEngine = async (...args: any[]) => ({});
export const calculateMappingEngine = async (...args: any[]) => ({});
export const validateMappingEngine = async (...args: any[]) => ({});
