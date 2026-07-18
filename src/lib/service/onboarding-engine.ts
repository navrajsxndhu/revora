import { prisma } from "@/lib/prisma";

export const OnboardingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getOnboardingEngine = async (...args: any[]) => ({});
export const calculateOnboardingEngine = async (...args: any[]) => ({});
export const recordOnboardingEngineEvents = async (...args: any[]) => ({});
