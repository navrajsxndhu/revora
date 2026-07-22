
export const DependencyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDependencyEngine = async (...[]) => ({});
export const calculateDependencyEngine = async (...[]) => ({});
export const recordDependencyEngineEvents = async (...[]) => ({});
