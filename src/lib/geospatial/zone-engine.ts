import { prisma } from "@/lib/prisma";

export const ZoneEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getZoneEngine = async (...args: any[]) => ({});
export const calculateZoneEngine = async (...args: any[]) => ({});
export const validateZoneEngine = async (...args: any[]) => ({});
