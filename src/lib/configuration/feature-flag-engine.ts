
export const FeatureFlagEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFeatureFlagEngine = async (...[]) => ({});
export const calculateFeatureFlagEngine = async (...[]) => ({});
export const recordFeatureFlagEngineEvents = async (...[]) => ({});
