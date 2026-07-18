import { prisma } from "@/lib/prisma";

export const ServiceRequestEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getServiceRequestEngine = async (...args: any[]) => ({});
export const calculateServiceRequestEngine = async (...args: any[]) => ({});
export const recordServiceRequestEngineEvents = async (...args: any[]) => ({});
