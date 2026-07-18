import { prisma } from "@/lib/prisma";

export const TelemetryIndex = {
  getIndex: async (workspaceId: string) => {
    return prisma.telemetryIndex.findMany({ where: { workspaceId } });
  }
};
