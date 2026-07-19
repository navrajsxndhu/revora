import { prisma } from "@/lib/prisma";

export const CampaignEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCampaignEngine = async (...args: any[]) => ({});
export const calculateCampaignEngine = async (...args: any[]) => ({});
export const recordCampaignEngineEvents = async (...args: any[]) => ({});
