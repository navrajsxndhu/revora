import { prisma } from "@/lib/prisma";

export const CertificationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCertificationEngine = async (...args: any[]) => ({});
export const calculateCertificationEngine = async (...args: any[]) => ({});
export const recordCertificationEngineEvents = async (...args: any[]) => ({});
