import { prisma } from "@/lib/prisma";

export const ProgramEngine = {
  getPrograms: async (workspaceId: string) => {
    return prisma.transformationProgram.findMany({
      where: { workspaceId }
    });
  }
};
