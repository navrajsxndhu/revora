import { prisma } from "@/lib/prisma";

export const OnboardingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
