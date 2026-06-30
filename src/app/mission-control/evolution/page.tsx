import { prisma } from "@/lib/prisma";
import { evaluateRolloutStrategy } from "@/lib/evolution/adaptive-rollout-intelligence";
import { ReliabilityDNACard } from "@/components/mission-control/reliability-dna-card";
import { EvolutionTimeline } from "@/components/mission-control/evolution-timeline";
import { AntiPatternFeed } from "@/components/mission-control/anti-pattern-feed";
import { AdaptiveGovernancePanel } from "@/components/mission-control/adaptive-governance-panel";

export default async function EvolutionDashboard() {
  const workspace = await prisma.workspace.findFirst();
  if (!workspace) return <div>No workspace found.</div>;

  // For demonstration, pull the first service's DNA
  const dna = await prisma.reliabilityDNA.findFirst({
    where: { workspaceId: workspace.id }
  });

  const rolloutStrategy = dna ? await evaluateRolloutStrategy(workspace.id, dna.service) : null;

  const events = await prisma.governanceLearningEvent.findMany({
    where: { workspaceId: workspace.id },
    orderBy: { createdAt: 'desc' },
    take: 10
  });

  const patterns = await prisma.antiPatternEvent.findMany({
    where: { workspaceId: workspace.id },
    orderBy: { createdAt: 'desc' },
    take: 5
  });

  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 border-b border-slate-800 pb-6 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-light text-slate-100 mb-2">Self-Evolving Reliability Intelligence</h1>
            <p className="text-slate-400 text-sm">Deterministic policy learning and operational DNA tracking.</p>
          </div>
          {dna && (
            <div className="text-sm font-mono bg-slate-900 px-4 py-2 rounded border border-slate-800 text-slate-300">
              Targeting: <span className="text-blue-400">{dna.service}</span>
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <EvolutionTimeline events={events} />
            <AntiPatternFeed patterns={patterns} />
          </div>
          
          <div className="space-y-6">
            <ReliabilityDNACard dna={dna} />
            <AdaptiveGovernancePanel rolloutStrategy={rolloutStrategy} />
          </div>
        </div>
      </div>
    </div>
  );
}
