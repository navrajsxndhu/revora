import { prisma } from "@/lib/prisma";

export const InferenceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateInferenceEngine = async (...args: any[]) => ({});
export const governInferenceEngine = async (...args: any[]) => ({});
export const verifyInferenceEngine = async (...args: any[]) => ({});
