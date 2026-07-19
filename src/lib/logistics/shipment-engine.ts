import { prisma } from "@/lib/prisma";

export const ShipmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getShipmentEngine = async (...args: any[]) => ({});
export const calculateShipmentEngine = async (...args: any[]) => ({});
export const recordShipmentEngineEvents = async (...args: any[]) => ({});
