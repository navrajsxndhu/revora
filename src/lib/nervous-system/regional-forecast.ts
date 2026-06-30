import { prisma } from "../prisma";

export async function generateStressForecast(workspaceId: string, region: string) {
  // Pull recent pulses to model stress accumulation
  const pulses = await prisma.infrastructurePulse.findMany({
    where: { workspaceId, region },
    orderBy: { timestamp: 'desc' },
    take: 10
  });

  if (pulses.length === 0) return { stressScore: 0, predictedSaturation: null };

  let stressAcc = 0;
  for (const p of pulses) {
    if (p.latencyMs > 500) stressAcc += 10;
    if (p.activeQueues > 1000) stressAcc += 20;
    if (p.federationLagMs > 1000) stressAcc += 30;
  }

  const stressScore = Math.min(100, stressAcc);
  
  // Naive linear forecast: if >80 stress, saturation in 5 mins
  const predictedSaturation = stressScore > 80 ? new Date(Date.now() + 5 * 60000) : null;

  await prisma.regionalStressForecast.create({
    data: {
      workspaceId,
      region,
      stressScore,
      predictedSaturation
    }
  });

  return { stressScore, predictedSaturation };
}
