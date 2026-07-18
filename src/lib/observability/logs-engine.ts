import { prisma } from "@/lib/prisma";

export const LogsEngine = {
  getLogs: async (workspaceId: string) => {
    return prisma.telemetryLog.findMany({ where: { workspaceId } });
  }
};
