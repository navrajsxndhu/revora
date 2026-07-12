export interface ObjectiveFunction {
  id: string;
  name: string;
  formula: string;
  weighting: number;
  type: 'MINIMIZE' | 'MAXIMIZE';
}

export function getAvailableObjectiveFunctions(): ObjectiveFunction[] {
  return [
    {
      id: "OBJ_MIN_MTTR",
      name: "Minimize MTTR",
      formula: "Σ(DetectionTime + ResolutionTime) / IncidentCount",
      weighting: 1.0,
      type: "MINIMIZE"
    },
    {
      id: "OBJ_MAX_SURVIVABILITY",
      name: "Maximize Survivability",
      formula: "1 - (SimulatedDegradationPathways / TotalNodeCount)",
      weighting: 1.5,
      type: "MAXIMIZE"
    },
    {
      id: "OBJ_MIN_TREASURY_BURN",
      name: "Minimize Treasury Burn",
      formula: "Cost(Operations) + Cost(Debt_Servicing)",
      weighting: 0.8,
      type: "MINIMIZE"
    }
  ];
}
