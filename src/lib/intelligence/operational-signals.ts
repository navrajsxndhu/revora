export interface SignalDef {
  signalName: string;
  signalValue: number;
  signalCategory: string;
}

export function extractOperationalSignals(): SignalDef[] {
  // Pulls rigid, deterministic operational signals from the platform
  return [
    { signalName: "DEPLOYMENT_SUCCESS_TREND", signalValue: 99.4, signalCategory: "EXECUTION" },
    { signalName: "INCIDENT_DENSITY_7D", signalValue: 0.12, signalCategory: "RELIABILITY" },
    { signalName: "TREASURY_BURN_RATE", signalValue: 85.0, signalCategory: "ECONOMY" },
    { signalName: "CONSTITUTIONAL_COMPLIANCE", signalValue: 100.0, signalCategory: "GOVERNANCE" },
    { signalName: "COORDINATION_INTEGRITY", signalValue: 95.5, signalCategory: "COORDINATION" }
  ];
}
