import { prisma } from "@/lib/prisma";

export const AvailabilityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getAvailabilityEngine = async (...args: any[]) => ({});
export const calculateAvailabilityEngine = async (...args: any[]) => ({});
export const recordAvailabilityEngineEvents = async (...args: any[]) => ({});
