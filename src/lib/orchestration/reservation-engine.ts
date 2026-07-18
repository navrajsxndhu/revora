import { prisma } from "@/lib/prisma";

export const ReservationEngine = {
  getReservations: async (workspaceId: string) => {
    return prisma.executionReservation.findMany({
      where: { workspaceId }
    });
  }
};
