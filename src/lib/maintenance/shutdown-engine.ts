import { prisma } from "@/lib/prisma";

export const ShutdownEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getShutdownEngine = async (...args: any[]) => ({});
export const calculateShutdownEngine = async (...args: any[]) => ({});
export const recordShutdownEngineEvents = async (...args: any[]) => ({});
