
export const TelemetryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateTelemetryEngine = async (...[]) => ({});
export const governTelemetryEngine = async (...[]) => ({});
export const verifyTelemetryEngine = async (...[]) => ({});
