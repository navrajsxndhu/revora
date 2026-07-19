import { prisma } from "@/lib/prisma";

export const RoadmapEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRoadmapEngine = async (...args: any[]) => ({});
export const calculateRoadmapEngine = async (...args: any[]) => ({});
export const recordRoadmapEngineEvents = async (...args: any[]) => ({});
