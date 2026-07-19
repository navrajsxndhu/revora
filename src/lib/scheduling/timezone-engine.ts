import { prisma } from "@/lib/prisma";

export const TimezoneEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTimezoneEngine = async (...args: any[]) => ({});
export const calculateTimezoneEngine = async (...args: any[]) => ({});
export const recordTimezoneEngineEvents = async (...args: any[]) => ({});
