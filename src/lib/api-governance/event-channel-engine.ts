import { prisma } from "@/lib/prisma";

export const EventChannelEngine = {
  getChannels: async (workspaceId: string) => {
    return prisma.eventChannel.findMany({ where: { workspaceId } });
  }
};
