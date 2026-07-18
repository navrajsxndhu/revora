import { prisma } from "@/lib/prisma";

export const DigitalTwinLedgerEngine = {
  getLedger: async (workspaceId: string) => {
    return prisma.digitalTwinLedger.findMany({
      where: { workspaceId },
      orderBy: { timestamp: 'desc' },
      take: 100
    });
  }
};
