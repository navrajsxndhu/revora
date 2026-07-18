import { prisma } from "@/lib/prisma";

export const TopicEngine = {
  getTopics: async (workspaceId: string) => {
    return prisma.eventTopic.findMany({ where: { workspaceId } });
  }
};
