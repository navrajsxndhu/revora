import { Incident } from "@prisma/client";
import { Runbook, RunbookStep } from "./runbooks";

export type AdaptiveWarning = string;
export type AdaptiveExplanation = string;

export type AdaptiveRunbookStep = RunbookStep & {
  priorityScore: number;
  explanation?: AdaptiveExplanation;
};

export type AdaptiveRunbook = {
  id: string;
  title: string;
  description: string;
  warnings: AdaptiveWarning[];
  confidenceScore: number;
  confidenceLevel: string;
  steps: AdaptiveRunbookStep[];
};

const ACTION_BASE_SCORES: Record<string, number> = {
  "ROLLBACK_DEPLOYMENT": 85,
  "TRIGGER_REDEPLOY": 75,
  "REPLAY_WORKFLOW": 65,
  "RESTART_QUEUE": 60,
  "MANUAL_VERIFY": 50,
  "RETRY_SLACK": 40
};

export function generateAdaptiveRunbook(
  incident: Incident,
  runbook: Runbook,
  downstreamCount: number,
  confidenceContext: { confidence: number; level: string; explanation: string }
): AdaptiveRunbook {
  
  const warnings: AdaptiveWarning[] = [];
  
  if (downstreamCount >= 3) {
    warnings.push(`Large downstream impact detected (${downstreamCount} services). Prefer strict sequential recovery.`);
  }

  if (incident.recurringCount > 2) {
    warnings.push("This incident has occurred multiple times recently. Consider escalating to architecture review.");
  }

  if (confidenceContext.level === "LOW") {
    warnings.push("Historical automated recovery for this service has a low success rate. Manual verification strongly recommended.");
  }

  const adaptiveSteps = runbook.steps.map(step => {
    let score = ACTION_BASE_SCORES[step.actionType] || 30;
    let explanation = `Base priority for ${step.actionType}.`;

    if (step.actionType === "TRIGGER_REDEPLOY" && confidenceContext.confidence < 50) {
      score -= 20;
      explanation = "De-prioritized redeploy due to historically low success rate for this service.";
    }

    if (step.actionType === "REPLAY_WORKFLOW" && downstreamCount === 0) {
      score += 15;
      explanation = "Prioritized replay workflow because there is zero downstream impact (safe to retry quickly).";
    }
    
    if (step.actionType === "MANUAL_VERIFY" && confidenceContext.level === "LOW") {
      score += 30;
      explanation = "Prioritized manual verification because historical automated recovery is untrustworthy here.";
    }

    return {
      ...step,
      priorityScore: score,
      explanation
    };
  });

  // Sort by priority, descending
  adaptiveSteps.sort((a, b) => b.priorityScore - a.priorityScore);

  return {
    id: runbook.id,
    title: runbook.title,
    description: runbook.description,
    warnings,
    confidenceScore: confidenceContext.confidence,
    confidenceLevel: confidenceContext.level,
    steps: adaptiveSteps
  };
}
