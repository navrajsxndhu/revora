import { prisma } from "@/lib/prisma";
import { getMeshStatus } from "@/lib/network/mesh-health";
import { fetchFederatedEvents } from "@/lib/network/federation-engine";
import { aggregateFleetIntelligence } from "@/lib/network/fleet-intelligence";
import { getActiveRollbacks, executeGlobalRollback } from "@/lib/network/rollback-coordinator";
import { NetworkMap } from "@/components/mission-control/network-map";
import { FleetHealthPanel } from "@/components/mission-control/fleet-health-panel";
import { RollbackPropagation } from "@/components/mission-control/rollback-propagation";
import { ChaosSimulator } from "@/components/mission-control/chaos-simulator";
import { MeshStatusGrid } from "@/components/mission-control/mesh-status-grid";

export default async function GlobalNetworkDashboard() {
  const workspace = await prisma.workspace.findFirst();
  if (!workspace) return <div>No workspace found.</div>;

  // Ensure mock regions exist for dashboard visibility
  const regions = ["us-east-1", "eu-west-1", "ap-south-1"];
  for (const r of regions) {
    await prisma.regionalCoordinator.upsert({
      where: { workspaceId_region: { workspaceId: workspace.id, region: r } },
      create: { workspaceId: workspace.id, region: r, endpoint: `https://${r}.revora.local` },
      update: { lastPing: new Date() }
    });
  }

  const coordinators = await getMeshStatus(workspace.id);
  const federatedEvents = await fetchFederatedEvents(workspace.id);
  const fleetIntelligence = await aggregateFleetIntelligence(workspace.id);
  const rollbacks = await getActiveRollbacks(workspace.id);

  // Manual Trigger handler requires a server action or API route. 
  // We'll mock the handler prop for the UI, but it won't be fully wired in this read-only server component.

  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-light text-slate-100 mb-2">Autonomous Reliability Network</h1>
          <p className="text-slate-400 text-sm">Federated operational intelligence and global rollback coordination.</p>
        </header>

        <FleetHealthPanel intelligence={fleetIntelligence} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <NetworkMap coordinators={coordinators} />
            <RollbackPropagation rollbacks={rollbacks} onManualTrigger={async () => {
              'use server';
              // Mock manual trigger
              console.log('Triggering manual rollback...');
            }} />
            <ChaosSimulator workspaceId={workspace.id} />
          </div>
          
          <div className="space-y-6">
            <MeshStatusGrid federatedEvents={federatedEvents} />
          </div>
        </div>
      </div>
    </div>
  );
}
