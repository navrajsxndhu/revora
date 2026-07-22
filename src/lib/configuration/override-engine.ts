
export const OverrideEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getOverrideEngine = async (...[]) => ({});
export const calculateOverrideEngine = async (...[]) => ({});
export const recordOverrideEngineEvents = async (...[]) => ({});
