import { buildOptimizationBoundaries } from "./constraint-optimization";
import { getAvailableObjectiveFunctions } from "./objective-functions";
import { solveOptimizationSpace } from "./optimization-solver";
import { recordOptimization } from "./optimization-ledger";
import { simulateOptimizationImpact } from "./optimization-simulator";
import { calculateOptimizationIndex } from "./optimization-index";

export async function processOperationalOptimization(workspaceId: string, objectiveId: string) {
  // 1. Fetch Objective Function
  const objectives = getAvailableObjectiveFunctions();
  const objective = objectives.find(o => o.id === objectiveId);
  
  if (!objective) {
    throw new Error("Invalid optimization objective selected.");
  }

  // 2. Build Constraints
  const constraints = buildOptimizationBoundaries(workspaceId);

  // 3. Solve for optimal configuration
  const { winningConfiguration, candidates } = solveOptimizationSpace(constraints, objective);
  const winningCandidate = candidates.find(c => c.candidateName === winningConfiguration);

  // 4. Record the optimization in the immutable ledger
  const optimizationRecord = await recordOptimization(
    workspaceId,
    objective.name,
    winningConfiguration,
    winningCandidate ? winningCandidate.objectiveScore : 0,
    constraints,
    candidates
  );

  // 5. Simulate impact
  const simulation = await simulateOptimizationImpact(workspaceId, optimizationRecord.id, winningConfiguration);

  // 6. Update Maturity Index
  const index = await calculateOptimizationIndex(workspaceId);

  return {
    optimizationRecord,
    simulation,
    index
  };
}
