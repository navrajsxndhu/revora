import { prisma } from "@/lib/prisma";

export const EvaluationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateEvaluationEngine = async (...args: any[]) => ({});
export const governEvaluationEngine = async (...args: any[]) => ({});
export const verifyEvaluationEngine = async (...args: any[]) => ({});
