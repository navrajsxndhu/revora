import { prisma } from "@/lib/prisma";

export const CertificationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateCertificationEngine = async (...args: any[]) => ({});
export const governCertificationEngine = async (...args: any[]) => ({});
export const verifyCertificationEngine = async (...args: any[]) => ({});
