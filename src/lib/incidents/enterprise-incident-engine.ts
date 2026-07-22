import { detectIncidents } from "./incident-detection";
import { buildIncidentTimeline } from "./incident-timeline";
import { analyzeRootCause } from "./root-cause-analysis";
import { generateRecoveryPlan } from "./recovery-planning";

export async function orchestrateIncidentManagement(workspaceId: string) {
  // Master orchestrator for Enterprise Incident Management
  
  // 1. Detect Incidents
  const incidents = await detectIncidents(workspaceId);

  // 2. Process each active incident
  for (const incident of incidents) {
    if (incident.status === 'ACTIVE') {
      await buildIncidentTimeline(incident.id);
      await analyzeRootCause(incident.id);
      await generateRecoveryPlan(incident.id);
    }
  }

  return incidents;
}
