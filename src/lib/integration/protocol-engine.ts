import { prisma } from "@/lib/prisma";

export const ProtocolEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateProtocolEngine = async (...args: any[]) => ({});
export const governProtocolEngine = async (...args: any[]) => ({});
export const verifyProtocolEngine = async (...args: any[]) => ({});
