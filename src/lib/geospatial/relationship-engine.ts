import { prisma } from "@/lib/prisma";

export const RelationshipEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRelationshipEngine = async (...args: any[]) => ({});
export const calculateRelationshipEngine = async (...args: any[]) => ({});
export const validateRelationshipEngine = async (...args: any[]) => ({});
