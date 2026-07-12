import { prisma } from "@/lib/prisma";
import { compileExecutionPlan } from "./execution-plan";
import { validateExecutionStage } from "./execution-validation";

export async function orchestrateExecution(workspaceId: string, decisionId: string, strategy: string) {
  const plan = compileExecutionPlan(decisionId, strategy);

  const execution = await prisma.operationalExecution.create({
    data: {
      workspaceId,
      decisionId,
      executionStatus: "ORCHESTRATING",
      executionScore: 100.0,
      stages: {
        create: plan.stages.map(s => ({
          stageName: s.stageName,
          executionOrder: s.executionOrder,
          validationStatus: "PENDING"
        }))
      }
    },
    include: { stages: true }
  });

  return { execution, plan };
}
