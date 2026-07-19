import { prisma } from "@/lib/prisma";

export const ReferenceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getReferenceEngine = async (...args: any[]) => ({});
export const calculateReferenceEngine = async (...args: any[]) => ({});
export const validateReferenceEngine = async (...args: any[]) => ({});
