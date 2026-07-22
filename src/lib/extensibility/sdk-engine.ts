
export const SdkEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSdkEngine = async (...[]) => ({});
export const calculateSdkEngine = async (...[]) => ({});
export const recordSdkEngineEvents = async (...[]) => ({});
