
export const CorrelationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  },
  getCorrelations: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCorrelationEngine = async (...[]) => ({});
export const calculateCorrelationEngine = async (...[]) => ({});
export const recordCorrelationEngineEvents = async (...[]) => ({});
export const buildCorrelations = async (...[]) => ({});
