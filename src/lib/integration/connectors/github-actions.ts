import { ConnectorEvent } from "./github";

export async function pollGitHubActionsEvents(workspaceId: string): Promise<ConnectorEvent[]> {
  // Simulates deterministic polling of GitHub Actions workflow runs
  return [
    {
      provider: "GITHUB_ACTIONS",
      eventType: "WORKFLOW_SUCCESS",
      externalId: "run-998877",
      payloadHash: "g7h8i9j0",
      rawPayload: { workflow: "Production Deploy", status: "success" },
      timestamp: new Date().toISOString()
    }
  ];
}
