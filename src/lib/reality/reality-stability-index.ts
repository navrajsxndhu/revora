export async function calculateRealityStability(workspaceId: string, survivability: any, energyGovernance: any) {
  let score = 100.0;
  
  if (survivability.survivabilityScore < 80) score -= 15.0;
  if (energyGovernance.energyStability < 80) score -= 15.0;

  score = Math.max(0, score);

  let continuityClass = 'LOCALIZED';
  if (score > 85) continuityClass = 'CIVILIZATIONAL_INFRASTRUCTURE';
  else if (score > 70) continuityClass = 'PLANETARY';
  else if (score > 40) continuityClass = 'RESILIENT';
  else continuityClass = 'DISTRIBUTED';

  return {
    realityStabilityScore: score,
    infrastructureContinuityClass: continuityClass,
    planetarySurvivabilityHorizon: score > 70 ? '> 10 Years' : '< 2 Years'
  };
}
