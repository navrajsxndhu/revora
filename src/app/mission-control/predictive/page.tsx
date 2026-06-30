import { prisma } from "@/lib/prisma";
import { calculateReliabilityDebt } from "@/lib/predictive/reliability-debt";
import { calculateDriftForecast } from "@/lib/predictive/drift-forecast";
import { simulateDeploymentRisk } from "@/lib/predictive/rollout-simulator";

import { DebtWatchlist } from "@/components/mission-control/debt-watchlist";
import { DriftWarning } from "@/components/mission-control/drift-warning";
import { DeploymentForecast } from "@/components/mission-control/deployment-forecast";

export default async function PredictiveDashboardPage() {
  const workspaceId = await prisma.workspace.findFirst().then(w => w?.id);
  if (!workspaceId) return <div>No workspace found.</div>;

  const debtScores = await calculateReliabilityDebt(workspaceId);
  const driftWarnings = await calculateDriftForecast(workspaceId);
  
  // Mocking the incoming deployments for simulation
  const incomingDeployments = [
    { serviceName: 'api-gateway', category: 'API Gateway' },
    { serviceName: 'user-db', category: 'Database Migration' },
    { serviceName: 'notification-worker', category: 'Background Worker' }
  ];

  const simulations = await Promise.all(
    incomingDeployments.map(d => simulateDeploymentRisk(workspaceId, d.serviceName, d.category))
  );

  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-light text-slate-100 mb-2">Predictive Reliability Guardrails</h1>
          <p className="text-slate-400 text-sm">Deterministic deployment risk forecasting and architectural drift monitoring.</p>
        </header>

        <DeploymentForecast simulations={simulations} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DebtWatchlist debtScores={debtScores} />
          <DriftWarning driftWarnings={driftWarnings} />
        </div>
      </div>
    </div>
  );
}
