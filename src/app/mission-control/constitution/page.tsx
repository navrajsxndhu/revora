import React from 'react';
import { prisma } from '@/lib/prisma';
import { ConstitutionOverviewPanel } from './components/constitution-overview-panel';
import { ConstitutionalPolicyTable } from './components/constitutional-policy-table';
import { BreachDetectionFeed } from './components/breach-detection-feed';

export default async function ConstitutionalGovernancePage() {
  const constitution = await prisma.reliabilityConstitution.findFirst({
    orderBy: { createdAt: 'desc' }
  });

  const policies = await prisma.constitutionalPolicy.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const breaches = await prisma.constitutionalViolation.findMany({
    orderBy: { detectedAt: 'desc' },
    take: 10
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-black text-white min-h-screen">
      <header className="mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-light tracking-tight text-zinc-100">Constitutional Governance Plane</h1>
        <p className="text-zinc-400 mt-2 text-sm">
          Phase 99: Immutable deterministic operational law and sovereign enforcement.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-300">Constitutional Overview</h2>
            {constitution ? (
              <ConstitutionOverviewPanel constitution={constitution} />
            ) : (
              <p className="text-zinc-500 text-sm">Constitution not yet initialized.</p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-300">Immutable Policies</h2>
            <div className="overflow-hidden rounded-lg border border-zinc-800">
              <ConstitutionalPolicyTable policies={policies} />
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-medium mb-4 text-zinc-300">Breach Detection Feed</h2>
            <div className="space-y-4">
              {breaches.length > 0 ? (
                <BreachDetectionFeed breaches={breaches} />
              ) : (
                <p className="text-zinc-500 text-sm">No constitutional breaches detected.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
