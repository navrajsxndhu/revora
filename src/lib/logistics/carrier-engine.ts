import { prisma } from "@/lib/prisma";

export const CarrierEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCarrierEngine = async (...args: any[]) => ({});
export const calculateCarrierEngine = async (...args: any[]) => ({});
export const recordCarrierEngineEvents = async (...args: any[]) => ({});
