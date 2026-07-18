import { prisma } from "@/lib/prisma";

export const TelemetryEngine = {
  getSources: async (workspaceId: string) => {
    return prisma.telemetrySource.findMany({ where: { workspaceId } });
  }
};
