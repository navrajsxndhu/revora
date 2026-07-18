import { prisma } from "@/lib/prisma";

export const TracesEngine = {
  getTraces: async (workspaceId: string) => {
    return prisma.telemetryTrace.findMany({ where: { workspaceId } });
  }
};
