import { prisma } from "@/lib/prisma";
import { evaluateReliabilityBudget } from "@/lib/governance/reliability-budget";
import { FreezeBanner } from "@/components/mission-control/freeze-banner";
import { ReliabilityBudgetCard } from "@/components/mission-control/reliability-budget-card";
import { GovernancePanel } from "@/components/mission-control/governance-panel";

export default async function GovernanceDashboardPage() {
  const workspaceId = await prisma.workspace.findFirst().then(w => w?.id);
  if (!workspaceId) return <div>No workspace found.</div>;

  // We fetch a list of active services from deployment history to evaluate their budgets dynamically
  const uniqueServices = await prisma.deployment.findMany({
    where: { workspaceId },
    select: { serviceName: true },
    distinct: ['serviceName']
  });

  const budgets = await Promise.all(
    uniqueServices.map(s => evaluateReliabilityBudget(workspaceId, s.serviceName).then(res => ({
      serviceName: s.serviceName,
      ...res
    })))
  );

  const events = await prisma.governanceEvent.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 15
  });

  const frozenServices = budgets.filter(b => b.state === 'FROZEN');

  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-light text-slate-100 mb-2">Autonomous Governance</h1>
          <p className="text-slate-400 text-sm">Deterministic policy enforcement and reliability budgets.</p>
        </header>

        {frozenServices.map(fs => (
          <FreezeBanner key={fs.serviceName} active={true} reason={`${fs.serviceName} deployment freeze active due to budget depletion.`} />
        ))}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {budgets.map(b => (
            <div key={b.serviceName}>
              <h4 className="text-sm font-medium text-slate-300 mb-2">{b.serviceName}</h4>
              <ReliabilityBudgetCard budget={b.budget} state={b.state} />
            </div>
          ))}
        </div>

        <GovernancePanel events={events} />
      </div>
    </div>
  );
}
