
export const RuntimeEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRuntimeEngine = async (...[]) => ({});
export const calculateRuntimeEngine = async (...[]) => ({});
export const recordRuntimeEngineEvents = async (...[]) => ({});
