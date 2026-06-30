import { prisma } from '@/lib/prisma';

export async function projectFutureContinuity(workspaceId: string, baseScore: number) {
  const horizons = [
    { span: '5_YEARS', drop: 15 },
    { span: '10_YEARS', drop: 30 },
    { span: '20_YEARS', drop: 50 }
  ];

  for (const h of horizons) {
    const forecast = Math.max(0, baseScore - h.drop);
    let cClass = 'REACTIVE';
    if (forecast > 80) cClass = 'MULTI_GENERATIONAL';
    else if (forecast > 60) cClass = 'ENDURING';
    else if (forecast > 40) cClass = 'STABILIZING';

    await prisma.futureContinuityProjection.create({
      data: {
        workspaceId,
        projectionHorizon: h.span,
        survivabilityForecast: forecast,
        continuityClass: cClass
      }
    });
  }
}
