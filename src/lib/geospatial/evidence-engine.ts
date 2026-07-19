import { prisma } from "@/lib/prisma";

export const EvidenceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getEvidenceEngine = async (...args: any[]) => ({});
export const calculateEvidenceEngine = async (...args: any[]) => ({});
export const validateEvidenceEngine = async (...args: any[]) => ({});
