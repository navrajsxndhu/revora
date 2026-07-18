export const TelemetrySimulator = {
  simulate: async (workspaceId: string, scenario: string) => {
    return {
      scenario,
      operationalImpact: "LOW",
      businessImpact: "MINIMAL",
      governanceImpact: "LOW",
      recoveryImpact: "NEGLIGIBLE",
      dependencyImpact: "NONE"
    };
  }
};
