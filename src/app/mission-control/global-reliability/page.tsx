import { prisma } from "@/lib/prisma";
import { getGlobalBenchmarks } from "@/lib/global/global-benchmarks";
import { getWorkspacePercentileRank } from "@/lib/global/reliability-percentiles";
import { getDangerousDeploymentCategories } from "@/lib/global/industry-patterns";
import { getGlobalSignatureIntelligence } from "@/lib/global/signature-intelligence";

import { GlobalTrends } from "@/components/mission-control/global-trends";
import { WorkspacePercentile } from "@/components/mission-control/workspace-percentile";
import { GlobalSignatures } from "@/components/mission-control/global-signatures";

export default async function GlobalReliabilityPage() {
  const workspaceId = await prisma.workspace.findFirst().then(w => w?.id);
  if (!workspaceId) return <div>No workspace found.</div>;

  const benchmarks = await getGlobalBenchmarks();
  const percentile = await getWorkspacePercentileRank(workspaceId);
  const dangerousDeployments = await getDangerousDeploymentCategories();
  const signatures = await getGlobalSignatureIntelligence();

  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-light text-slate-100 mb-2">Global Reliability Network</h1>
          <p className="text-slate-400 text-sm">Anonymized, deterministic operational benchmarking across all workspaces.</p>
        </header>

        <WorkspacePercentile percentileData={percentile} />

        <GlobalTrends 
          mttrMinutes={benchmarks.mttrMinutes} 
          recoverySuccessRate={benchmarks.recoverySuccessRate} 
          status={benchmarks.status} 
        />

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-10">
          <h2 className="text-xl font-medium text-slate-100 mb-6">Dangerous Deployment Categories</h2>
          {dangerousDeployments.length === 0 ? (
            <p className="text-sm text-slate-500">Insufficient data to categorize deployments globally.</p>
          ) : (
            <div className="space-y-4">
              {dangerousDeployments.map(dep => (
                <div key={dep.category} className="flex justify-between items-center p-4 bg-slate-950 border border-slate-800 rounded">
                  <div>
                    <h3 className="text-sm font-medium text-slate-200">{dep.category}</h3>
                    <p className="text-xs text-slate-500 mt-1">Rollback Frequency: {dep.rollbackFrequency}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${dep.correlationRisk === 'HIGH_RISK' ? 'bg-rose-950 text-rose-400' : 'bg-amber-950 text-amber-400'}`}>
                    {dep.correlationRisk}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <GlobalSignatures signatures={signatures} />
      </div>
    </div>
  );
}
