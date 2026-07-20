import { prisma } from "@/lib/prisma";

export const ParameterEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateParameterEngine = async (...args: any[]) => ({});
export const governParameterEngine = async (...args: any[]) => ({});
export const verifyParameterEngine = async (...args: any[]) => ({});
