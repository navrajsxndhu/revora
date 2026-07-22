
export async function createServiceRequest(workspaceId: string, category: string, payload: unknown) {
  const validCategories = [
    "Infrastructure", "Platform", "Security", "Access", "Release",
    "Change", "Incident", "Compliance", "FinOps", "Reliability"
  ];

  if (!validCategories.includes(category)) {
    throw new Error(`Invalid category: ${category}`);
  }

  // Deterministically create request
  return {
    requestId: `REQ-${Date.now()}`,
    status: "CREATED"
  };
}
