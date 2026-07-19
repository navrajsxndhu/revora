import { prisma } from "@/lib/prisma";

export const CalendarEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCalendarEngine = async (...args: any[]) => ({});
export const calculateCalendarEngine = async (...args: any[]) => ({});
export const recordCalendarEngineEvents = async (...args: any[]) => ({});
