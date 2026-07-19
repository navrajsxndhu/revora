import { prisma } from "@/lib/prisma";

export const FacilityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFacilityEngine = async (...args: any[]) => ({});
export const calculateFacilityEngine = async (...args: any[]) => ({});
export const validateFacilityEngine = async (...args: any[]) => ({});
