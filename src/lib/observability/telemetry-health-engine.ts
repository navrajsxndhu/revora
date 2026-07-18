export const TelemetryHealthEngine = {
  getHealth: async (workspaceId: string) => {
    return { status: "HEALTHY", score: 100 };
  }
};
