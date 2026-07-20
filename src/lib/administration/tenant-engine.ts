import { prisma } from "@/lib/prisma";

export const TenantEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateTenantEngine = async (...args: any[]) => ({});
export const governTenantEngine = async (...args: any[]) => ({});
export const verifyTenantEngine = async (...args: any[]) => ({});
