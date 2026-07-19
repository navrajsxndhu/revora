import { prisma } from "@/lib/prisma";

export const SignatureEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSignatureEngine = async (...args: any[]) => ({});
export const calculateSignatureEngine = async (...args: any[]) => ({});
export const recordSignatureEngineEvents = async (...args: any[]) => ({});
