import { prisma } from "@/lib/prisma";

export const SurveyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSurveyEngine = async (...args: any[]) => ({});
export const calculateSurveyEngine = async (...args: any[]) => ({});
export const recordSurveyEngineEvents = async (...args: any[]) => ({});
