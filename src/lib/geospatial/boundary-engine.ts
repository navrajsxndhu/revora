import { prisma } from "@/lib/prisma";

export const BoundaryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getBoundaryEngine = async (...args: any[]) => ({});
export const calculateBoundaryEngine = async (...args: any[]) => ({});
export const validateBoundaryEngine = async (...args: any[]) => ({});
