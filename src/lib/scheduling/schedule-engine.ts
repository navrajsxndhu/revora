import { prisma } from "@/lib/prisma";

export const ScheduleEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getScheduleEngine = async (...args: any[]) => ({});
export const calculateScheduleEngine = async (...args: any[]) => ({});
export const recordScheduleEngineEvents = async (...args: any[]) => ({});
