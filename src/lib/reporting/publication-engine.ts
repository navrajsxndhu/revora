import { prisma } from "@/lib/prisma";

export const PublicationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validatePublicationEngine = async (...args: any[]) => ({});
export const governPublicationEngine = async (...args: any[]) => ({});
export const verifyPublicationEngine = async (...args: any[]) => ({});
