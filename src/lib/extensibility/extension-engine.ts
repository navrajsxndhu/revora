import { prisma } from "@/lib/prisma";

export const ExtensionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getExtensionEngine = async (...args: any[]) => ({});
export const calculateExtensionEngine = async (...args: any[]) => ({});
export const recordExtensionEngineEvents = async (...args: any[]) => ({});
