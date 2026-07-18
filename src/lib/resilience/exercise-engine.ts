import { prisma } from "@/lib/prisma";

export const ExerciseEngine = {
  getExercises: async (workspaceId: string) => {
    return prisma.recoveryExercise.findMany({
      where: { workspaceId }
    });
  }
};
