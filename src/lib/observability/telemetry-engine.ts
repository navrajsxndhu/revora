
export const TelemetryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTelemetryEngine = async (...[]) => ({});
export const calculateTelemetryEngine = async (...[]) => ({});
export const recordTelemetryEngineEvents = async (...[]) => ({});
