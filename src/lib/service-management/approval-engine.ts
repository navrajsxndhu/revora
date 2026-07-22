
export async function determineMandatoryApprovals(workspaceId: string, requestPayload: unknown) {
  // Determines mandatory approvals deterministically
  return [
    { role: "Platform Engineering", status: "PENDING" },
    { role: "Security", status: "PENDING" },
    { role: "Service Owner", status: "PENDING" }
  ];
}
