import { prisma } from "@/lib/prisma";

export const GeofenceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getGeofenceEngine = async (...args: any[]) => ({});
export const calculateGeofenceEngine = async (...args: any[]) => ({});
export const validateGeofenceEngine = async (...args: any[]) => ({});
