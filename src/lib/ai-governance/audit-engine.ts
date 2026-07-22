
export const AuditEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateAuditEngine = async (...[]) => ({});
export const governAuditEngine = async (...[]) => ({});
export const verifyAuditEngine = async (...[]) => ({});
