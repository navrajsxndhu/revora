import { prisma } from "@/lib/prisma";

export const GatewayEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getGatewayEngine = async (...args: any[]) => ({});
export const calculateGatewayEngine = async (...args: any[]) => ({});
export const recordGatewayEngineEvents = async (...args: any[]) => ({});
