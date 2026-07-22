
export async function mapGovernanceControls(workspaceId: string, subsystem: string) {
  // Maps every subsystem against applicable controls
  const controls: unknown = {
    "Release": ["Security", "SRE", "Treasury", "Constitution", "Platform Readiness"],
    "Incident": ["Constitution", "SRE"],
    "Change": ["Security", "Constitution"]
  };
  return controls[subsystem] || ["Constitution"];
}
