
export const BillingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getBillingEngine = async (...[]) => ({});
export const calculateBillingEngine = async (...[]) => ({});
export const recordBillingEngineEvents = async (...[]) => ({});
