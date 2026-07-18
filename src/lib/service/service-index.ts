import { prisma } from "@/lib/prisma";

export const ServiceIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getServiceIndex = async (...args: any[]) => ({});
export const calculateServiceIndex = async (...args: any[]) => ({});
export const recordServiceIndexEvents = async (...args: any[]) => ({});
