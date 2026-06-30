import React from 'react';
import { prisma } from '@/lib/prisma';
import { FederationOverviewPanel } from './components/federation-overview-panel';
import { ReliabilityTreatyTable } from './components/reliability-treaty-table';
import { EcosystemFragilityMap } from './components/ecosystem-fragility-map';

export default async function OperationalStatecraftPage() {
  const federations = await prisma.sovereignFederation.findMany({
    orderBy: { createdAt: 'desc' },
    take: 1
  });
  
  const treaties = await prisma.reliabilityTreaty.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const dependencies = await prisma.ecosystemDependency.findMany({
    orderBy: { fragilityScore: 'desc' }
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-zinc-950 text-zinc-300 min-h-screen">
      <header className="mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-serif tracking-tight text-zinc-100">Operational Statecraft Plane</h1>
        <p className="text-zinc-500 mt-2 text-sm">
          Phase 101: Sovereign operational diplomacy between engineering civilizations.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Federation Overview</h2>
            {federations[0] ? (
              <FederationOverviewPanel federation={federations[0]} />
            ) : (
              <p className="text-zinc-500 text-sm">No sovereign federation active.</p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Active Reliability Treaties</h2>
            <div className="overflow-hidden rounded-lg border border-zinc-800">
              <ReliabilityTreatyTable treaties={treaties} />
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Ecosystem Fragility</h2>
            <div className="space-y-4">
              <EcosystemFragilityMap dependencies={dependencies} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
