import { prisma } from "@/lib/prisma";

export const ValueStreamEngine = {
  getValueStreams: async (workspaceId: string) => {
    return prisma.valueStream.findMany({
      where: { workspaceId }
    });
  }
};
