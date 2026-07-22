
export const IntegrationLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const recordIntegrationEvents = async (...[]) => ({});

export const getIntegrationLedger = async (...[]) => ({});
