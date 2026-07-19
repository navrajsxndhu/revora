import { prisma } from "@/lib/prisma";

export const HealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getHealthEngine = async (...args: any[]) => ({});
export const calculateHealthEngine = async (...args: any[]) => ({});
export const recordHealthEngineEvents = async (...args: any[]) => ({});
