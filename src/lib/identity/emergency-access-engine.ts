import { prisma } from "@/lib/prisma";

export const EmergencyAccessEngine = {
  getEmergencyAccesses: async (workspaceId: string) => {
    return prisma.emergencyAccess.findMany({
      where: { workspaceId }
    });
  }
};
