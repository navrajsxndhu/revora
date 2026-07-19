import { prisma } from "@/lib/prisma";

export const ConformityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getConformityEngine = async (...args: any[]) => ({});
export const calculateConformityEngine = async (...args: any[]) => ({});
export const recordConformityEngineEvents = async (...args: any[]) => ({});
