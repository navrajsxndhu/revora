import { prisma } from "@/lib/prisma";

export const EndpointEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateEndpointEngine = async (...args: any[]) => ({});
export const governEndpointEngine = async (...args: any[]) => ({});
export const verifyEndpointEngine = async (...args: any[]) => ({});
