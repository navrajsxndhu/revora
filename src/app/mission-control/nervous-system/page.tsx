import { prisma } from "@/lib/prisma";
import { aggregateStressNodes } from "@/lib/nervous-system/topology-stress";
import { getActiveMigrations } from "@/lib/nervous-system/load-migration";
import { evaluateResilience } from "@/lib/nervous-system/resilience-optimizer";
import { StressPropagationMap } from "@/components/mission-control/stress-propagation-map";
import { MigrationTimeline } from "@/components/mission-control/migration-timeline";
import { RegionalPressureGrid } from "@/components/mission-control/regional-pressure-grid";
import { ResilienceOptimizerPanel } from "@/components/mission-control/resilience-optimizer-panel";
import { AutonomousRoutingFeed } from "@/components/mission-control/autonomous-routing-feed";

export default async function NervousSystemDashboard() {
  const workspace = await prisma.workspace.findFirst();
  if (!workspace) return <div>No workspace found.</div>;

  const stressNodes = await aggregateStressNodes(workspace.id);
  const migrations = await getActiveMigrations(workspace.id);
  
  const forecasts = await prisma.regionalStressForecast.findMany({
    where: { workspaceId: workspace.id },
    orderBy: { createdAt: 'desc' },
    take: 3
  });

  const recommendation = evaluateResilience(450, 100); // Mock for dashboard

  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-light text-slate-100 mb-2">Autonomous Nervous System</h1>
          <p className="text-slate-400 text-sm">Predictive load migration, adaptive budgets, and topology stress visualization.</p>
        </header>

        <RegionalPressureGrid regions={forecasts} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <StressPropagationMap nodes={stressNodes} />
            <MigrationTimeline migrations={migrations} />
          </div>
          
          <div className="space-y-6">
            <ResilienceOptimizerPanel recommendation={recommendation} />
            <AutonomousRoutingFeed />
          </div>
        </div>
      </div>
    </div>
  );
}
