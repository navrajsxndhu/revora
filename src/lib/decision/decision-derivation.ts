import { DecisionContextSnapshot } from "./decision-context";

export interface DecisionAlternative {
  optionName: string;
  description: string;
  evidence: string[];
}

export function deriveAlternatives(context: DecisionContextSnapshot): DecisionAlternative[] {
  const alternatives: DecisionAlternative[] = [];

  if (context.activeRisks > 0) {
    alternatives.push({
      optionName: "FREEZE_DEPLOYMENT",
      description: "Halt all deployment activity until active risks are resolved.",
      evidence: ["Derived from constitutional constraint regarding active unresolved incidents."]
    });
    alternatives.push({
      optionName: "EMERGENCY_PATCH_ONLY",
      description: "Allow only deployments marked as emergency hotfixes.",
      evidence: ["Standard operational protocol during degraded capacity states."]
    });
  } else {
    alternatives.push({
      optionName: "CANARY_1_PERCENT",
      description: "Minimal risk rollout strategy.",
      evidence: ["Historical doctrine indicates lowest MTTR with 1% canaries."]
    });
    alternatives.push({
      optionName: "CANARY_5_PERCENT",
      description: "Balanced velocity rollout.",
      evidence: ["Knowledge graph supports 5% based on previous sustained epochs."]
    });
    alternatives.push({
      optionName: "IMMEDIATE_ROLLOUT",
      description: "High velocity, high risk rollout.",
      evidence: ["Available due to 0 active risks and high operational capacity."]
    });
  }

  return alternatives;
}
