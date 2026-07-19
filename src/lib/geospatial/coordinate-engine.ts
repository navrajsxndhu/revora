import { prisma } from "@/lib/prisma";

export const CoordinateEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCoordinateEngine = async (...args: any[]) => ({});
export const calculateCoordinateEngine = async (...args: any[]) => ({});
export const validateCoordinateEngine = async (...args: any[]) => ({});
