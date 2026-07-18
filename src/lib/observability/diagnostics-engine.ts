import { prisma } from "@/lib/prisma";

export const DiagnosticsEngine = {
  getSessions: async (workspaceId: string) => {
    return prisma.diagnosticSession.findMany({ where: { workspaceId } });
  }
};
