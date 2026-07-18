import { prisma } from "@/lib/prisma";

export const GovernanceBoardEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getGovernanceBoardEngine = async (...args: any[]) => ({});
export const calculateGovernanceBoardEngine = async (...args: any[]) => ({});
export const recordGovernanceBoardEngineEvents = async (...args: any[]) => ({});
