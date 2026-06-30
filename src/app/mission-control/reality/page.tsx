import React from 'react';
import { prisma } from '@/lib/prisma';
import { RealityStabilityPanel } from './components/reality-stability-panel';
import { InfrastructureSurvivabilityGrid } from './components/infrastructure-survivability-grid';
import { ClimateExposureTable } from './components/climate-exposure-table';
import { HardwareLifecycleTimeline } from './components/hardware-lifecycle-timeline';

export default async function OperationalRealityPage() {
  const survivabilitySnapshots = await prisma.infrastructureSurvivabilitySnapshot.findMany({
    orderBy: { capturedAt: 'desc' },
    take: 4
  });

  const climateZones = await prisma.climateExposureZone.findMany({
    orderBy: { updatedAt: 'desc' },
    take: 5
  });

  const hardwareRecords = await prisma.hardwareLifecycleRecord.findMany({
    orderBy: { recordedAt: 'desc' },
    take: 5
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-zinc-950 text-zinc-300 min-h-screen">
      <header className="mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-serif tracking-tight text-zinc-100">Operational Reality Plane</h1>
        <p className="text-zinc-500 mt-2 text-sm">
          Phase 102: Physical infrastructure reality and planetary-scale operational continuity.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Planetary Stability</h2>
            <RealityStabilityPanel />
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Regional Survivability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfrastructureSurvivabilityGrid snapshots={survivabilitySnapshots} />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Climate Exposure</h2>
            <div className="overflow-hidden rounded-lg border border-zinc-800">
              <ClimateExposureTable zones={climateZones} />
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-100">Hardware Lifecycle</h2>
            <div className="space-y-4">
              <HardwareLifecycleTimeline records={hardwareRecords} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
