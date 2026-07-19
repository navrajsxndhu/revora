import { prisma } from "@/lib/prisma";

export const TelemetryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTelemetryEngine = async (...args: any[]) => ({});
export const calculateTelemetryEngine = async (...args: any[]) => ({});
export const recordTelemetryEngineEvents = async (...args: any[]) => ({});
