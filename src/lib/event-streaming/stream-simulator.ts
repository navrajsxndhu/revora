export const StreamSimulator = {
  simulate: async (workspaceId: string, scenario: string) => {
    return {
      scenario,
      operationalImpact: "LOW",
      dependencyImpact: "NONE",
      businessImpact: "MINIMAL",
      governanceImpact: "LOW",
      recoveryImpact: "NEGLIGIBLE"
    };
  }
};
