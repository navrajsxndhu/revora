import { prisma } from "@/lib/prisma";

export const RecoveryEngine = {
  getPlans: async (workspaceId: string) => {
    return prisma.recoveryPlan.findMany({
      where: { workspaceId }
    });
  },
  getExecutions: async (workspaceId: string) => {
    // Note: Due to schema resolution, the model in prisma may be named something specific,
    // assuming it is Phase134RecoveryExecution or BcpRecoveryExecution based on previous steps.
    // However, since we cleared duplicates, we can safely use the generic or specific Prisma models.
    // For Phase134 it was named 'recoveryExecutions' in schema but actually generated as phase134RecoveryExecution
    // I'll query via raw or find a safe way if needed, but 'phase134RecoveryExecution' is the mapped client name.
    return prisma.phase134RecoveryExecution.findMany({
      where: { workspaceId }
    });
  }
};
