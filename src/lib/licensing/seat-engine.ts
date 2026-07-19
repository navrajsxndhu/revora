import { prisma } from "@/lib/prisma";

export const SeatEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSeatEngine = async (...args: any[]) => ({});
export const calculateSeatEngine = async (...args: any[]) => ({});
export const recordSeatEngineEvents = async (...args: any[]) => ({});
