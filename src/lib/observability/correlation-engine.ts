import { prisma } from "@/lib/prisma";

export const CorrelationEngine = {
  getCorrelations: async (workspaceId: string) => {
    return prisma.telemetryCorrelation.findMany({ where: { workspaceId } });
  }
};

export const buildCorrelations = async (workspaceId: string) => {
  return prisma.telemetryCorrelation.findMany({ where: { workspaceId } });
};
