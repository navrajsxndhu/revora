export interface SimulationResult {
  scenario: string;
  projectedHealth: number;
  survivabilityDelta: number;
  simulatedAt: string;
}

export function simulateIntelligenceScenario(scenario: string): SimulationResult {
  // Simulates structural impacts on organizational health
  let delta = -2.5;
  let health = 92.5;

  if (scenario === 'INCIDENT_SURGE') {
    delta = -15.2;
    health = 79.8;
  } else if (scenario === 'TREASURY_REDUCTION') {
    delta = -4.1;
    health = 90.9;
  }

  return {
    scenario,
    projectedHealth: health,
    survivabilityDelta: delta,
    simulatedAt: new Date().toISOString()
  };
}
