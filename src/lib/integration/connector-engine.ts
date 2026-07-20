import { prisma } from "@/lib/prisma";

export const ConnectorEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateConnectorEngine = async (...args: any[]) => ({});
export const governConnectorEngine = async (...args: any[]) => ({});
export const verifyConnectorEngine = async (...args: any[]) => ({});
