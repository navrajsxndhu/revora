import { prisma } from "@/lib/prisma";

export const PrivilegedAccessEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPrivilegedAccessEngine = async (...args: any[]) => ({});
export const calculatePrivilegedAccessEngine = async (...args: any[]) => ({});
export const recordPrivilegedAccessEngineEvents = async (...args: any[]) => ({});
