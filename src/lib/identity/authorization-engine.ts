
export const AuthorizationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getAuthorizationEngine = async (...[]) => ({});
export const calculateAuthorizationEngine = async (...[]) => ({});
export const recordAuthorizationEngineEvents = async (...[]) => ({});
