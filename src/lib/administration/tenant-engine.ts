
export const TenantEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateTenantEngine = async (...[]) => ({});
export const governTenantEngine = async (...[]) => ({});
export const verifyTenantEngine = async (...[]) => ({});
