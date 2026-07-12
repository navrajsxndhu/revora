export interface ExecutionStagePlan {
  stageName: string;
  executionOrder: number;
  prerequisites: string[];
  validationGates: string[];
}

export interface OperationalExecutionPlan {
  decisionId: string;
  strategy: string;
  stages: ExecutionStagePlan[];
}

export function compileExecutionPlan(decisionId: string, strategy: string): OperationalExecutionPlan {
  const stages: ExecutionStagePlan[] = [];

  switch (strategy) {
    case "CANARY_1_PERCENT":
    case "CANARY_5_PERCENT":
      stages.push({
        stageName: "PRE_FLIGHT_VALIDATION",
        executionOrder: 1,
        prerequisites: [],
        validationGates: ["CONSTITUTIONAL_COMPLIANCE", "INCIDENT_FREEZE_CHECK"]
      });
      stages.push({
        stageName: "CANARY_DEPLOYMENT",
        executionOrder: 2,
        prerequisites: ["PRE_FLIGHT_VALIDATION"],
        validationGates: ["ERROR_RATE_BASELINE"]
      });
      stages.push({
        stageName: "GLOBAL_ROLLOUT",
        executionOrder: 3,
        prerequisites: ["CANARY_DEPLOYMENT"],
        validationGates: ["TREASURY_CAPACITY_VERIFIED"]
      });
      break;

    case "IMMEDIATE_ROLLOUT":
      stages.push({
        stageName: "PRE_FLIGHT_VALIDATION",
        executionOrder: 1,
        prerequisites: [],
        validationGates: ["CONSTITUTIONAL_COMPLIANCE", "INCIDENT_FREEZE_CHECK"]
      });
      stages.push({
        stageName: "GLOBAL_ROLLOUT",
        executionOrder: 2,
        prerequisites: ["PRE_FLIGHT_VALIDATION"],
        validationGates: ["TREASURY_CAPACITY_VERIFIED"]
      });
      break;
      
    case "FREEZE_DEPLOYMENT":
      stages.push({
        stageName: "ENFORCE_PIPELINE_LOCK",
        executionOrder: 1,
        prerequisites: [],
        validationGates: ["CONSTITUTIONAL_COMPLIANCE"]
      });
      break;

    default:
      stages.push({
        stageName: "GENERIC_EXECUTION",
        executionOrder: 1,
        prerequisites: [],
        validationGates: ["CONSTITUTIONAL_COMPLIANCE"]
      });
  }

  return { decisionId, strategy, stages };
}
