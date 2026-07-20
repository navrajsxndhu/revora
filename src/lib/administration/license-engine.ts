import { prisma } from "@/lib/prisma";

export const LicenseEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateLicenseEngine = async (...args: any[]) => ({});
export const governLicenseEngine = async (...args: any[]) => ({});
export const verifyLicenseEngine = async (...args: any[]) => ({});
