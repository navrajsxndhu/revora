import { ConnectorEvent } from "./github";

export async function pollJiraEvents(workspaceId: string): Promise<ConnectorEvent[]> {
  // Simulates deterministic polling of Jira issues and change requests
  return [
    {
      provider: "JIRA",
      eventType: "ISSUE_TRANSITION",
      externalId: "REV-115",
      payloadHash: "c2d3e4f5",
      rawPayload: { issueKey: "REV-115", status: "In Progress" },
      timestamp: new Date().toISOString()
    }
  ];
}
