import { prisma } from "@/lib/prisma";

export const NotificationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getNotificationEngine = async (...args: any[]) => ({});
export const calculateNotificationEngine = async (...args: any[]) => ({});
export const recordNotificationEngineEvents = async (...args: any[]) => ({});
