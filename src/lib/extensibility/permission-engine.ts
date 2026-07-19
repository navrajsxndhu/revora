import { prisma } from "@/lib/prisma";

export const PermissionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPermissionEngine = async (...args: any[]) => ({});
export const calculatePermissionEngine = async (...args: any[]) => ({});
export const recordPermissionEngineEvents = async (...args: any[]) => ({});
