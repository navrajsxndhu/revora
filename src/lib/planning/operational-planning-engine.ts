import { getAvailablePlanningGoals } from "./planning-goals";
import { generateDependencyGraph } from "./dependency-planning";
import { optimizeOperationalPlan } from "./plan-optimization";
import { recordOperationalPlan } from "./planning-ledger";
import { simulateOperationalPlan } from "./planning-simulator";
import { calculatePlanningIndex } from "./planning-index";

export async function assembleOperationalPlan(workspaceId: string, goalId: string, planName: string) {
  // 1. Fetch Goal Objective
  const goals = getAvailablePlanningGoals();
  const goal = goals.find(g => g.id === goalId);
  
  if (!goal) {
    throw new Error("Invalid planning goal selected.");
  }

  // 2. Generate Dependency Graph
  const { milestones, dependencies } = generateDependencyGraph(goalId);

  // 3. Optimize the Plan
  const optimization = optimizeOperationalPlan(milestones, dependencies);

  // 4. Record the assembled plan
  const planRecord = await recordOperationalPlan(
    workspaceId,
    planName,
    goal.name,
    optimization.optimizationScore,
    milestones,
    dependencies
  );

  // 5. Simulate execution
  const simulation = await simulateOperationalPlan(workspaceId, planRecord.id);

  // 6. Update Maturity Index
  const index = await calculatePlanningIndex(workspaceId);

  return {
    planRecord,
    simulation,
    index
  };
}
