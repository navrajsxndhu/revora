
export const FailbackEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFailbackEngine = async (...[]) => ({});
export const calculateFailbackEngine = async (...[]) => ({});
export const recordFailbackEngineEvents = async (...[]) => ({});
