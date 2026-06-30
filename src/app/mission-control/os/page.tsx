import { prisma } from "@/lib/prisma";
import { buildLiveTopology, getRegionalHealth, getActiveWarRooms } from "@/lib/os/revora-os";
import { TopologyMap } from "@/components/mission-control/topology-map";
import { RegionalHealthGrid } from "@/components/mission-control/regional-health-grid";
import { WarRoomPanel } from "@/components/mission-control/war-room-panel";
import { LiveOperationsFeed } from "@/components/mission-control/live-operations-feed";
import { OperationsTimeline } from "@/components/mission-control/operations-timeline";

export default async function RevoraOSDashboard() {
  const workspace = await prisma.workspace.findFirst();
  if (!workspace) return <div>No workspace found.</div>;

  const topology = await buildLiveTopology(workspace.id);
  const regionalHealth = await getRegionalHealth(workspace.id);
  const activeWarRooms = await getActiveWarRooms(workspace.id);
  
  // Aggregate recent operations timeline (incidents, governance, deployments)
  const timelineEvents = await prisma.incidentEvent.findMany({
    where: { incident: { workspaceId: workspace.id } },
    orderBy: { timestamp: 'desc' },
    take: 10
  });

  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-light text-slate-100 mb-2">Revora OS Command Plane</h1>
          <p className="text-slate-400 text-sm">Real-time operational topology, war rooms, and event streaming.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TopologyMap graph={topology} />
            <RegionalHealthGrid regions={regionalHealth} />
            <OperationsTimeline events={timelineEvents} />
          </div>
          
          <div className="space-y-6">
            <WarRoomPanel warRooms={activeWarRooms} />
            <LiveOperationsFeed workspaceId={workspace.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
