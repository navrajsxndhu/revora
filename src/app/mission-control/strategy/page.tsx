import React from 'react';
import { prisma } from '@/lib/prisma';
import { ReliabilityTreasuryPanel } from './components/reliability-treasury-panel';
import { RegionalPressureGrid } from './components/regional-pressure-grid';
import { CapitalAllocationTable } from './components/capital-allocation-table';

export default async function StrategicCoordinationPage() {
  const treasurySnapshots = await prisma.reliabilityTreasurySnapshot.findMany({
    take: 1,
    orderBy: { capturedAt: 'desc' }
  });
  
  const currentTreasury = treasurySnapshots[0];

  const pressureZones = await prisma.organizationalPressureZone.findMany({
    orderBy: { pressureScore: 'desc' }
  });

  const allocations = await prisma.reliabilityCapitalAllocation.findMany({
    orderBy: { allocatedCapital: 'desc' }
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-zinc-950 text-white min-h-screen">
      <header className="mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-light tracking-tight text-zinc-100">Strategic Reliability Coordination</h1>
        <p className="text-zinc-400 mt-2 text-sm">
          Phase 98: Federated Operational Strategy System & Reliability Capital Allocation
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-300">Reliability Treasury</h2>
            {currentTreasury ? (
              <ReliabilityTreasuryPanel snapshot={currentTreasury} />
            ) : (
              <p className="text-zinc-500 text-sm">No treasury snapshots recorded yet.</p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-300">Capital Allocations</h2>
            <div className="overflow-hidden rounded-lg border border-zinc-800">
              <CapitalAllocationTable allocations={allocations} />
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-300">Regional Pressure Topology</h2>
            <div className="space-y-4">
              {pressureZones.map(zone => (
                <RegionalPressureGrid key={zone.id} zone={zone} />
              ))}
              {pressureZones.length === 0 && (
                <p className="text-zinc-500 text-sm">No regional pressure data active.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
