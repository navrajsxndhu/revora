export const MetadataSimulator = {
  simulate: async (workspaceId: string, scenario: string) => {
    return {
      scenario,
      operationalImpact: "LOW",
      complianceImpact: "NEGLIGIBLE",
      businessImpact: "MINIMAL",
      dependencyImpact: "NONE",
      recoveryImpact: "LOW"
    };
  }
};
