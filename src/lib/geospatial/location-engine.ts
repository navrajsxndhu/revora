import { prisma } from "@/lib/prisma";

export const LocationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getLocationEngine = async (...args: any[]) => ({});
export const calculateLocationEngine = async (...args: any[]) => ({});
export const validateLocationEngine = async (...args: any[]) => ({});
