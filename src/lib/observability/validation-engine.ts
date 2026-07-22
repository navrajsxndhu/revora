
export const ValidationEngine = {
  validate: async (workspaceId: string) => {
    return {
      status: "VALIDATED",
      issues: []
    };
  }
};
