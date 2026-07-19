import { prisma } from "@/lib/prisma";

export const ProfileEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getProfileEngine = async (...args: any[]) => ({});
export const calculateProfileEngine = async (...args: any[]) => ({});
export const recordProfileEngineEvents = async (...args: any[]) => ({});
