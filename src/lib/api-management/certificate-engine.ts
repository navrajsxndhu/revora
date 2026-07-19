import { prisma } from "@/lib/prisma";

export const CertificateEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCertificateEngine = async (...args: any[]) => ({});
export const calculateCertificateEngine = async (...args: any[]) => ({});
export const recordCertificateEngineEvents = async (...args: any[]) => ({});
