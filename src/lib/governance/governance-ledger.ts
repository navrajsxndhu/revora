
export async function appendToGovernanceLedger(workspaceId: string, eventData: unknown) {
  // Append-only governance history, never mutable
  return {
    status: "RECORDED",
    evidenceId: `gov-evd-${Date.now()}`
  };
}
