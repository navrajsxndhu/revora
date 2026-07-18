export const ApiValidationEngine = {
  validate: async (workspaceId: string) => {
    return {
      status: "VALIDATED",
      issues: []
    };
  }
};
