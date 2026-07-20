import { prisma } from "@/lib/prisma";

export const RegistryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateRegistryEngine = async (...args: any[]) => ({});
export const governRegistryEngine = async (...args: any[]) => ({});
export const verifyRegistryEngine = async (...args: any[]) => ({});
