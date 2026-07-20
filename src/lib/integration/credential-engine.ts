import { prisma } from "@/lib/prisma";

export const CredentialEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateCredentialEngine = async (...args: any[]) => ({});
export const governCredentialEngine = async (...args: any[]) => ({});
export const verifyCredentialEngine = async (...args: any[]) => ({});
