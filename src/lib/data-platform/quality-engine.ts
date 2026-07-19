import { prisma } from "@/lib/prisma";

export const QualityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getQualityEngine = async (...args: any[]) => ({});
export const calculateQualityEngine = async (...args: any[]) => ({});
export const recordQualityEngineEvents = async (...args: any[]) => ({});
