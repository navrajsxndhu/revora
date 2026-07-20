import { prisma } from "@/lib/prisma";

export const ValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateValidationEngine = async (...args: any[]) => ({});
export const governValidationEngine = async (...args: any[]) => ({});
export const verifyValidationEngine = async (...args: any[]) => ({});
