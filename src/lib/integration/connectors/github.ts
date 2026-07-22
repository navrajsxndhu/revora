export interface ConnectorEvent {
  provider: string;
  eventType: string;
  externalId: string;
  payloadHash: string;
  rawPayload: unknown;
  timestamp: string;
}

export async function pollGitHubEvents(workspaceId: string): Promise<ConnectorEvent[]> {
  // Simulates deterministic polling of GitHub commits and releases
  return [
    {
      provider: "GITHUB",
      eventType: "COMMIT_PUSH",
      externalId: "sha-9a8b7c6d5e",
      payloadHash: "b3f4d5c6",
      rawPayload: { branch: "main", message: "fix: update temporal validation logic" },
      timestamp: new Date().toISOString()
    }
  ];
}
