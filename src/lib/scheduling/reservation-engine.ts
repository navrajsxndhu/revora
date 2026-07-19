import { prisma } from "@/lib/prisma";

export const ReservationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getReservationEngine = async (...args: any[]) => ({});
export const calculateReservationEngine = async (...args: any[]) => ({});
export const recordReservationEngineEvents = async (...args: any[]) => ({});
