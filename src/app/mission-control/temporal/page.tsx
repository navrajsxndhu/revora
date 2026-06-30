import React from 'react';
import { prisma } from '@/lib/prisma';
import { TemporalCivilizationPanel } from './components/temporal-civilization-panel';
import { FutureContinuityGrid } from './components/future-continuity-grid';
import { CivilizationEvolutionTimeline } from './components/civilization-evolution-timeline';

export default async function TemporalResiliencePage() {
  const drifts = await prisma.temporalDriftSnapshot.findMany({
    orderBy: { recordedAt: 'desc' },
    take: 1
  });

  const projections = await prisma.futureContinuityProjection.findMany({
    orderBy: { generatedAt: 'desc' },
    take: 3
  });

  const evolutions = await prisma.civilizationEvolutionRecord.findMany({
    orderBy: { recordedAt: 'desc' }
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-zinc-950 text-zinc-300 min-h-screen">
      <header className="mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-serif tracking-tight text-zinc-100">Temporal Resilience Plane</h1>
        <p className="text-zinc-500 mt-2 text-sm">
          Phase 103: Deterministic long-horizon survivability and generational continuity.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Temporal Civilization Index</h2>
            <TemporalCivilizationPanel drift={drifts[0]} />
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Future Continuity Horizons</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FutureContinuityGrid projections={projections} />
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Civilization Evolution</h2>
            <div className="space-y-4">
              <CivilizationEvolutionTimeline records={evolutions} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
