import { prisma } from "@/lib/prisma";

export const EvidenceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateEvidenceEngine = async (...args: any[]) => ({});
export const governEvidenceEngine = async (...args: any[]) => ({});
export const verifyEvidenceEngine = async (...args: any[]) => ({});
