import { prisma } from "@/lib/prisma";

export const WebhookEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateWebhookEngine = async (...args: any[]) => ({});
export const governWebhookEngine = async (...args: any[]) => ({});
export const verifyWebhookEngine = async (...args: any[]) => ({});
