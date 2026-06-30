import { evaluateReliabilityBudget } from "./reliability-budget";
import { checkFreezeState } from "./freeze-windows";
import { determinePolicyOutcome } from "./adaptive-policy";

export async function evaluateDeploymentPolicy(workspaceId: string, serviceName: string) {
  const freeze = await checkFreezeState(workspaceId, serviceName);
  
  if (freeze.active) {
    return {
      serviceName,
      status: 'BLOCK',
      message: `Active Deployment Freeze: ${freeze.reason}`
    };
  }

  const { state } = await evaluateReliabilityBudget(workspaceId, serviceName);
  const outcome = determinePolicyOutcome(state);

  return {
    serviceName,
    status: outcome.status,
    message: outcome.message,
    restrictionLevel: state
  };
}
