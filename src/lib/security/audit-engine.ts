
export async function processAudit(workspaceId: string) {
  // Mock audit events
  return [
    { event: "Policy Changed", actor: "admin@revora.app", resource: "Network Segmentation", timestamp: "2026-07-12T10:00:00Z" },
    { event: "Access Granted", actor: "system", resource: "Prod DB Read", timestamp: "2026-07-12T10:05:00Z" }
  ];
}
