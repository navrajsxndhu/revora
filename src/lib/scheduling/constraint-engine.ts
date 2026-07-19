import { prisma } from "@/lib/prisma";

export const ConstraintEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getConstraintEngine = async (...args: any[]) => ({});
export const calculateConstraintEngine = async (...args: any[]) => ({});
export const recordConstraintEngineEvents = async (...args: any[]) => ({});
