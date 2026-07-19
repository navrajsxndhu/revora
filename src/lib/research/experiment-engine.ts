import { prisma } from "@/lib/prisma";

export const ExperimentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getExperimentEngine = async (...args: any[]) => ({});
export const calculateExperimentEngine = async (...args: any[]) => ({});
export const recordExperimentEngineEvents = async (...args: any[]) => ({});
