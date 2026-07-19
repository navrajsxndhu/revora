import { prisma } from "@/lib/prisma";

export const ExperienceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getExperienceEngine = async (...args: any[]) => ({});
export const calculateExperienceEngine = async (...args: any[]) => ({});
export const recordExperienceEngineEvents = async (...args: any[]) => ({});
