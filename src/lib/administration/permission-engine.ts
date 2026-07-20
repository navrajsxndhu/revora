import { prisma } from "@/lib/prisma";

export const PermissionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validatePermissionEngine = async (...args: any[]) => ({});
export const governPermissionEngine = async (...args: any[]) => ({});
export const verifyPermissionEngine = async (...args: any[]) => ({});
