import { prisma } from "@/lib/prisma";

export const AnnouncementEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateAnnouncementEngine = async (...args: any[]) => ({});
export const governAnnouncementEngine = async (...args: any[]) => ({});
export const verifyAnnouncementEngine = async (...args: any[]) => ({});
