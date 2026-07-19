import { prisma } from "@/lib/prisma";

export const LicenseEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getLicenseEngine = async (...args: any[]) => ({});
export const calculateLicenseEngine = async (...args: any[]) => ({});
export const recordLicenseEngineEvents = async (...args: any[]) => ({});
