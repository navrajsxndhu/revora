import { prisma } from "@/lib/prisma";

export const AuthorizationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getAuthorizationEngine = async (...args: any[]) => ({});
export const calculateAuthorizationEngine = async (...args: any[]) => ({});
export const recordAuthorizationEngineEvents = async (...args: any[]) => ({});
