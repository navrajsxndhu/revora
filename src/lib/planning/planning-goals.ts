export interface PlanningGoal {
  id: string;
  name: string;
  description: string;
  targetMetrics: {
    metric: string;
    targetValue: number;
    comparator: 'LESS_THAN' | 'GREATER_THAN';
  }[];
}

export function getAvailablePlanningGoals(): PlanningGoal[] {
  return [
    {
      id: "GOAL_REDUCE_MTTR",
      name: "Reduce MTTR",
      description: "Aggressively optimize operations to drive Mean Time To Recovery below critical thresholds.",
      targetMetrics: [
        { metric: "MTTR_MINUTES", targetValue: 5, comparator: "LESS_THAN" }
      ]
    },
    {
      id: "GOAL_CLOUD_MIGRATION",
      name: "Complete Cloud Migration",
      description: "Decommission legacy datacenters and transition fully to distributed infrastructure.",
      targetMetrics: [
        { metric: "LEGACY_NODE_COUNT", targetValue: 0, comparator: "LESS_THAN" },
        { metric: "SURVIVABILITY_INDEX", targetValue: 95, comparator: "GREATER_THAN" }
      ]
    },
    {
      id: "GOAL_TECH_DEBT_ELIMINATION",
      name: "Eliminate Technical Debt",
      description: "Systematically deprecate obsolete dependencies across the federation.",
      targetMetrics: [
        { metric: "OBSOLETE_DEPS", targetValue: 0, comparator: "LESS_THAN" }
      ]
    }
  ];
}
