import { prisma } from "@/lib/prisma";

export const HierarchyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateHierarchyEngine = async (...args: any[]) => ({});
export const governHierarchyEngine = async (...args: any[]) => ({});
export const verifyHierarchyEngine = async (...args: any[]) => ({});
