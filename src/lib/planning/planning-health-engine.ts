
export const PlanningHealthEngine = {
  getHealth: async (workspaceId: string) => {
    return {
      capacityCoverage: 100,
      utilizationHealth: 95,
      infrastructureReadiness: 98,
      constraintHealth: 100
    };
  }
};
