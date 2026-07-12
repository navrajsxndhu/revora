import { ConnectorEvent } from "./github";

export async function pollDatadogEvents(workspaceId: string): Promise<ConnectorEvent[]> {
  // Simulates deterministic polling of Datadog incidents and metrics
  return [
    {
      provider: "DATADOG",
      eventType: "MONITOR_ALERT",
      externalId: "alert-8842",
      payloadHash: "a1b2c3d4",
      rawPayload: { monitor_name: "API Latency Spike", status: "Triggered" },
      timestamp: new Date().toISOString()
    }
  ];
}
