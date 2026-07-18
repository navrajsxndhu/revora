import { prisma } from "@/lib/prisma";

export const TelemetryLedger = {
  getLedger: async (workspaceId: string) => {
    return prisma.telemetryLedger.findMany({ where: { workspaceId } });
  }
};
