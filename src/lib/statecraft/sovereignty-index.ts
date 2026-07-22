export async function calculateSovereigntyIndex(workspaceId: string, fragility: any) {
  let sovereigntyScore = 100.0 - (fragility.fragilityScore * 0.8);
  sovereigntyScore = Math.max(0, sovereigntyScore);

  let sovereigntyClass = 'DEPENDENT';
  if (sovereigntyScore > 85) sovereigntyClass = 'FEDERATED_CIVILIZATION';
  else if (sovereigntyScore > 70) sovereigntyClass = 'SOVEREIGN';
  else if (sovereigntyScore > 40) sovereigntyClass = 'RESILIENT';
  else if (sovereigntyScore > 20) sovereigntyClass = 'COORDINATED';

  return { sovereigntyScore, sovereigntyClass };
}
