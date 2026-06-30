import { simulateDeploymentRisk } from "./rollout-simulator";

export async function determineAdaptiveRollout(workspaceId: string, serviceName: string, category: string) {
  // This wrapper takes the simulation and directly interfaces with CI/CD risk gates.
  const simulation = await simulateDeploymentRisk(workspaceId, serviceName, category);
  
  // In a real system, this might log to an audit table or emit an event
  // to GitHub Actions indicating the rollout strategy.
  
  return {
    strategy: simulation.recommendation,
    enforcementReason: simulation.reason
  };
}
