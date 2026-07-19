import { prisma } from "@/lib/prisma";

export const MonitoringEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getMonitoringEngine = async (...args: any[]) => ({});
export const calculateMonitoringEngine = async (...args: any[]) => ({});
export const recordMonitoringEngineEvents = async (...args: any[]) => ({});
