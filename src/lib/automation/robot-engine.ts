import { prisma } from "@/lib/prisma";

export const RobotEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRobotEngine = async (...args: any[]) => ({});
export const calculateRobotEngine = async (...args: any[]) => ({});
export const recordRobotEngineEvents = async (...args: any[]) => ({});
