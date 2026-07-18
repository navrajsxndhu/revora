import { prisma } from "@/lib/prisma";

export const WebhookEngine = {
  getWebhooks: async (workspaceId: string) => {
    return prisma.webhookEndpoint.findMany({ where: { workspaceId } });
  }
};
