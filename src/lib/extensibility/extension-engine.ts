
export const ExtensionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getExtensionEngine = async (...[]) => ({});
export const calculateExtensionEngine = async (...[]) => ({});
export const recordExtensionEngineEvents = async (...[]) => ({});
