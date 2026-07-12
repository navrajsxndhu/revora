import { prisma } from "@/lib/prisma";

export async function generateRollbackPlan(executionId: string) {
  const rollbackVersion = `rb_${Date.now()}`;
  
  return await prisma.rollbackPlan.create({
    data: {
      executionId,
      rollbackVersion,
      recoveryStrategy: "DETERMINISTIC_INVERT_OPERATION"
    }
  });
}
