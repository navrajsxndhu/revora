import { orchestrateExecution } from "./execution-orchestrator";
import { generateRollbackPlan } from "./rollback-coordination";
import { generateExecutionReplay } from "./execution-replay";
import { calculateExecutionIndex } from "./execution-index";
import { validateExecutionStage } from "./execution-validation";

export async function processOperationalExecution(workspaceId: string, decisionId: string, strategy: string) {
  // 1. Orchestrate and generate plan
  const { execution, plan } = await orchestrateExecution(workspaceId, decisionId, strategy);

  // 2. Validate first stage
  const initialValidations = await validateExecutionStage(workspaceId, plan.stages[0]?.validationGates || []);

  // 3. Generate Rollback Plan
  const rollback = await generateRollbackPlan(execution.id);

  // 4. Calculate execution index
  const index = await calculateExecutionIndex(workspaceId);

  return {
    execution,
    plan,
    initialValidations,
    rollback,
    index
  };
}
