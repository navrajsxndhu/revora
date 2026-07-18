import { prisma } from "@/lib/prisma";

export const PrivilegedAccessEngine = {
  getSessions: async (workspaceId: string) => {
    return prisma.privilegedSession.findMany({
      where: { workspaceId }
    });
  }
};
