import { prisma } from "@/lib/prisma";

export const ServiceRegistryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getServiceRegistryEngine = async (...args: any[]) => ({});
export const calculateServiceRegistryEngine = async (...args: any[]) => ({});
export const recordServiceRegistryEngineEvents = async (...args: any[]) => ({});
