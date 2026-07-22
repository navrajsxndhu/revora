
export const PermissionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validatePermissionEngine = async (...[]) => ({});
export const governPermissionEngine = async (...[]) => ({});
export const verifyPermissionEngine = async (...[]) => ({});
