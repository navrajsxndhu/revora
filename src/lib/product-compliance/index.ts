import { prisma } from "@/lib/prisma";

export const Index = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getIndex = async (...args: any[]) => ({});
export const calculateIndex = async (...args: any[]) => ({});
export const recordIndexEvents = async (...args: any[]) => ({});
