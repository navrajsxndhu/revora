import { prisma } from "@/lib/prisma";

export const AlertEngine = {
  getAlerts: async (workspaceId: string) => {
    return prisma.telemetryAlert.findMany({ where: { workspaceId } });
  }
};
