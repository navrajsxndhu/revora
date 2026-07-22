import { pollGitHubEvents } from "./connectors/github";
import { pollDatadogEvents } from "./connectors/datadog";
import { pollJiraEvents } from "./connectors/jira";
import { pollKubernetesEvents } from "./connectors/kubernetes";
import { pollGitHubActionsEvents } from "./connectors/github-actions";
import { normalizeIntegrationEvents } from "./data-normalization";
import { synchronizeEvents } from "./event-synchronization";
import { recordIntegrationEvents } from "./integration-ledger";
import { calculateIntegrationIndex } from "./integration-index";
import { snapshotIntegrationHealth } from "./integration-health";
import { prisma } from "@/lib/prisma";

export async function orchestrateOperationalIntegration(workspaceId: string) {
  // 1. Fetch active connectors
  const connectors = await prisma.integrationConnector.findMany({
    where: { workspaceId, status: "ACTIVE" }
  });

  if (connectors.length === 0) return { synchronizedEvents: 0, index: null };

  let allRawEvents: unknown[] = [];

  // 2. Poll Connectors (Simulated Deterministic Fetch)
  for (const connector of connectors) {
    let events: unknown[] = [];
    if (connector.provider === "GITHUB") events = await pollGitHubEvents(workspaceId);
    else if (connector.provider === "DATADOG") events = await pollDatadogEvents(workspaceId);
    else if (connector.provider === "JIRA") events = await pollJiraEvents(workspaceId);
    else if (connector.provider === "KUBERNETES") events = await pollKubernetesEvents(workspaceId);
    else if (connector.provider === "GITHUB_ACTIONS") events = await pollGitHubActionsEvents(workspaceId);

    // 3. Normalize external JSON into rigid Revora events
    const normalized = normalizeIntegrationEvents(events);

    // 4. Validate and Synchronize with internal subsystems
    const syncResults = synchronizeEvents(normalized);

    // 5. Commit to append-only ledger
    await recordIntegrationEvents(workspaceId, connector.id, normalized, syncResults);
    
    // 6. Snapshot health
    await snapshotIntegrationHealth(workspaceId, connector.id);
    
    allRawEvents = allRawEvents.concat(normalized);
  }

  // 7. Calculate Maturity Index
  const index = await calculateIntegrationIndex(workspaceId);

  return {
    synchronizedEvents: allRawEvents.length,
    index
  };
}
