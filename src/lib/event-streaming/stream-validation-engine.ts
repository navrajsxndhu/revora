export const StreamValidationEngine = {
  validate: async (workspaceId: string) => {
    return {
      status: "VALIDATED",
      issues: []
    };
  }
};
