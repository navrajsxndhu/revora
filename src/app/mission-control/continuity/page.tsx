import React from 'react';
import { prisma } from '@/lib/prisma';
import { CivilizationIndexPanel } from './components/civilization-index-panel';
import { GovernanceEntropyChart } from './components/governance-entropy-chart';
import { InstitutionalLineageTimeline } from './components/institutional-lineage-timeline';

export default async function OperationalContinuityPage() {
  const snapshots = await prisma.operationalContinuitySnapshot.findMany({
    orderBy: { createdAt: 'desc' },
    take: 1
  });

  const entropySnapshots = await prisma.governanceEntropySnapshot.findMany({
    orderBy: { capturedAt: 'desc' },
    take: 10
  });

  const lineages = await prisma.organizationalLineage.findMany({
    orderBy: { recordedAt: 'desc' }
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-zinc-950 text-zinc-300 min-h-screen">
      <header className="mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-serif tracking-tight text-zinc-100">Operational Continuity Plane</h1>
        <p className="text-zinc-500 mt-2 text-sm">
          Phase 100: Deterministic Operational Civilization Layer. Institutional memory and long-term survivability.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Civilization Index</h2>
            {snapshots[0] ? (
              <CivilizationIndexPanel snapshot={snapshots[0]} />
            ) : (
              <p className="text-zinc-500 text-sm">Continuity snapshot not initialized.</p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Governance Entropy</h2>
            <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <GovernanceEntropyChart snapshots={entropySnapshots} />
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Institutional Lineage</h2>
            <div className="space-y-4">
              <InstitutionalLineageTimeline lineages={lineages} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
