import React from 'react';
import { prisma } from '@/lib/prisma';
import { ReliabilityBudgetPanel } from './components/reliability-budget-panel';
import { OperationalDebtMap } from './components/operational-debt-map';

export default async function ReliabilityEconomicsPage() {
  const budgets = await prisma.reliabilityBudget.findMany({
    take: 10,
    orderBy: { stabilityScore: 'asc' }
  });

  const debtProfiles = await prisma.operationalDebtProfile.findMany({
    take: 10,
    orderBy: { debtScore: 'desc' }
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-black text-white min-h-screen">
      <header className="mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-light tracking-tight">Reliability Economics Control Plane</h1>
        <p className="text-zinc-400 mt-2 text-sm">
          Phase 97: Deterministic orchestration of organizational reliability capital, deployment quotas, and operational debt.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-medium mb-4 text-zinc-300">Global Reliability Budgets</h2>
          <div className="space-y-4">
            {budgets.map(budget => (
              <ReliabilityBudgetPanel key={budget.id} budget={budget} />
            ))}
            {budgets.length === 0 && <p className="text-zinc-500 text-sm">No budgets allocated yet.</p>}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4 text-zinc-300">Operational Debt Market</h2>
          <div className="space-y-4">
            {debtProfiles.map(profile => (
              <OperationalDebtMap key={profile.id} profile={profile} />
            ))}
            {debtProfiles.length === 0 && <p className="text-zinc-500 text-sm">No debt profiles tracked yet.</p>}
          </div>
        </section>
      </div>
    </div>
  );
}
