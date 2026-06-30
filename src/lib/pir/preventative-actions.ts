import { ImpactAnalysis } from "./impact-analysis";
import { prisma } from "../prisma";

export async function generatePreventativeActions(incidentId: string, impact: ImpactAnalysis): Promise<string> {
  const incident = await prisma.incident.findUnique({
    where: { id: incidentId },
    include: { deployment: true }
  });

  if (!incident) return "No data available for preventative actions.";

  const actions: string[] = [];

  // 1. Blast Radius Actions
  if (impact.blastRadius > 3) {
    actions.push(`**Reduce Service Coupling:** Blast radius reached ${impact.blastRadius} services. Investigate circuit breakers between ${incident.serviceAffected || 'the root service'} and its downstream dependents to prevent cascading failure.`);
  }

  // 2. Rollback & Deployment Actions
  if (impact.rollbackTriggered) {
    if (incident.deployment?.riskLevel === 'HIGH' || incident.deployment?.riskLevel === 'CRITICAL') {
      actions.push(`**Enforce Pre-Deployment Gates:** Deployment was flagged as ${incident.deployment.riskLevel} risk prior to release. Enforce strict Revora CI blocking for this repository.`);
    } else {
      actions.push(`**Improve Test Coverage:** Rollback was required for a deployment marked as low/medium risk. Enhance integration tests for ${incident.deployment?.serviceName || 'this service'} to catch regressions earlier.`);
    }
  }

  // 3. Schema specific (heuristic check on description/diff)
  const isSchemaRelated = (incident.description && incident.description.toLowerCase().includes('schema')) || 
                          (incident.deployment?.changedFiles && incident.deployment.changedFiles.includes('.prisma'));
                          
  if (isSchemaRelated && impact.totalDowntimeMinutes > 5) {
    actions.push(`**Schema Migration Safety:** Database schema changes caused extended downtime. Introduce strict backward-compatible migration patterns (expand and contract) and utilize migration staging environments.`);
  }

  // 4. Recovery Instability
  if (incident.recoveryStatus === 'COMPLETED' && incident.historicalRecoveryCount && incident.historicalRecoveryCount > 2) {
    actions.push(`**Automate Recurring Recovery:** This recovery chain has been manually executed ${incident.historicalRecoveryCount} times historically. Convert this exact sequence into an automated, self-healing background job.`);
  }

  if (actions.length === 0) {
    return "No systemic preventative actions identified. Ensure standard monitoring continues.";
  }

  return actions.map(a => `- ${a}`).join('\n');
}
