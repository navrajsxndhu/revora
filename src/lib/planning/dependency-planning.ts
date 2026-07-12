export interface MilestoneDef {
  id: string;
  name: string;
  executionOrder: number;
}

export interface DependencyDef {
  sourceId: string;
  targetId: string;
  type: string;
}

export function generateDependencyGraph(goalId: string): { milestones: MilestoneDef[], dependencies: DependencyDef[] } {
  // Deterministically generate a dependency graph based on the goal
  const milestones: MilestoneDef[] = [
    { id: "M1", name: "Audit Infrastructure", executionOrder: 1 },
    { id: "M2", name: "Provision Parallel Environment", executionOrder: 2 },
    { id: "M3", name: "Migrate State", executionOrder: 3 },
    { id: "M4", name: "Cutover Traffic", executionOrder: 4 },
    { id: "M5", name: "Decommission Legacy", executionOrder: 5 }
  ];

  const dependencies: DependencyDef[] = [
    { sourceId: "M1", targetId: "M2", type: "BLOCKING" },
    { sourceId: "M2", targetId: "M3", type: "BLOCKING" },
    { sourceId: "M3", targetId: "M4", type: "BLOCKING" },
    { sourceId: "M4", targetId: "M5", type: "BLOCKING" }
  ];

  return { milestones, dependencies };
}
