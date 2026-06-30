import { SERVICE_DEPENDENCIES } from "@/lib/services/dependencies";

export interface RecoveryAction {
  service: string;
  action: string;
}

export interface RecoveryPlan {
  rootService: string | null;
  recommendedActions: RecoveryAction[];
}

export function generateRecoveryPlan(rootService: string | null, symptomServices: string[]): RecoveryPlan {
  const recommendedActions: RecoveryAction[] = [];

  if (!rootService) {
    return { rootService: null, recommendedActions };
  }

  // Deduplicate symptom services just in case
  const uniqueSymptoms = Array.from(new Set(symptomServices));

  // A very deterministic, hard-coded mapping of what action to take for a given service when it needs recovery
  // Ideally, this could be stored in the DB or a static config.
  const serviceRecoveryActions: Record<string, string> = {
    "worker-service": "REPLAY_WORKFLOW",
    "Worker Queue": "REPLAY_WORKFLOW",
    "webhooks": "RETRY_SLACK",
    "API Gateway": "TRIGGER_REDEPLOY",
    "api-gateway": "TRIGGER_REDEPLOY"
  };

  // We should order the recovery actions based on a logical progression if needed.
  // For now, we just iterate through the known symptoms that belong to this root service's downstream.
  for (const symptom of uniqueSymptoms) {
    // If the symptom service has an upstream that matches the rootService
    const upstreamDeps = SERVICE_DEPENDENCIES[symptom] || [];
    if (upstreamDeps.includes(rootService)) {
      const actionToTake = serviceRecoveryActions[symptom] || "REPLAY_WORKFLOW";
      recommendedActions.push({
        service: symptom,
        action: actionToTake
      });
    }
  }

  return {
    rootService,
    recommendedActions
  };
}
