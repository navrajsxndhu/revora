"use client";

import { useEffect, useState } from "react";
import { CoordinationIndexPanel } from "@/components/mission-control/coordination/coordination-index-panel";
import { CoordinationGraphViewer } from "@/components/mission-control/coordination/coordination-graph-viewer";
import { ResourceAllocationGrid } from "@/components/mission-control/coordination/resource-allocation-grid";
import { ConflictResolutionTable } from "@/components/mission-control/coordination/conflict-resolution-table";
import { CoordinationLedger } from "@/components/mission-control/coordination/coordination-ledger";
import { CoordinationSimulationPanel } from "@/components/mission-control/coordination/coordination-simulation-panel";
import { SynchronizationTimeline } from "@/components/mission-control/coordination/synchronization-timeline";
import { CoordinationHealthDashboard } from "@/components/mission-control/coordination/coordination-health-dashboard";
import { Loader2, Globe } from "lucide-react";

export default function OperationalCoordinationPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation this would fetch from /api/coordination/index and related routes
    setTimeout(() => {
      setData({
        index: {
          coordinationScore: 88.4,
          coordinationClass: "FEDERATED",
          coordinationMaturity: "CROSS_DOMAIN_COORDINATION"
        },
        graph: {
          nodes: [
            { id: "NODE_PLAN_A", nodeType: "PLAN", reference: "Cloud Migration", role: "PRIMARY_INITIATIVE" },
            { id: "NODE_PLAN_B", nodeType: "PLAN", reference: "Security Audit", role: "COMPLIANCE_REQUIREMENT" },
            { id: "NODE_REGION_US_EAST", nodeType: "REGION", reference: "us-east-1", role: "EXECUTION_ENVIRONMENT" }
          ],
          edges: [
            { sourceId: "NODE_PLAN_B", targetId: "NODE_PLAN_A", edgeType: "CONSTITUTIONAL_DEPENDENCY" },
            { sourceId: "NODE_PLAN_A", targetId: "NODE_REGION_US_EAST", edgeType: "RESOURCE_CONTENTION" }
          ]
        },
        resources: [
          { resourceType: "MAINTENANCE_WINDOW", reservedCapacity: 100.0, reservationWindow: "SAT_0200_0400_UTC" },
          { resourceType: "TREASURY_DEPLOYMENT_BUDGET", reservedCapacity: 45000.0, reservationWindow: "Q3_ROLLOUT" },
          { resourceType: "REGIONAL_ROLLOUT_CAPACITY", reservedCapacity: 1.0, reservationWindow: "US_EAST_1_LOCK" }
        ],
        conflicts: [
          { conflictType: "RESOURCE_OVERLAP_US_EAST", severity: "CRITICAL", resolutionStrategy: "SERIALIZE_EXECUTION_TIMELINE" },
          { conflictType: "CONSTITUTIONAL_FREEZE_VIOLATION", severity: "HIGH", resolutionStrategy: "SHIFT_MAINTENANCE_WINDOW_FORWARD" }
        ],
        ledger: [
          { coordinationName: "Q3 Sync", coordinationScore: 92.1, coordinationStatus: "SYNCHRONIZED", createdAt: new Date(Date.now() - 86400000).toISOString() },
          { coordinationName: "Disaster Recovery Drill", coordinationScore: 95.5, coordinationStatus: "COMPLETED", createdAt: new Date(Date.now() - 86400000 * 3).toISOString() }
        ],
        simulation: {
          coordinationFeasibility: "MATHEMATICALLY_SOUND",
          contentionProbability: "0.01%",
          survivabilityProjection: 98.8,
          executionReadiness: "READY_FOR_DEPLOYMENT"
        },
        healthStats: {
          activeThreads: 14,
          deadlocks: 0,
          nodesInContention: 2,
          alignment: 99.1
        },
        timeline: [35, 42, 48, 55, 62, 70, 75, 82, 85, 88.4]
      });
      
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-500" />
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <Globe className="h-6 w-6 text-emerald-400" />
            The Operational Coordination Plane
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic synchronization of organization-wide operational initiatives and conflict prevention.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <CoordinationIndexPanel data={data?.index} />
        </div>
        <div className="col-span-2 space-y-4">
          <SynchronizationTimeline timelineData={data?.timeline} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-7">
        <div className="col-span-2 space-y-4">
          <CoordinationHealthDashboard healthStats={data?.healthStats} />
          <CoordinationSimulationPanel simulation={data?.simulation} />
        </div>
        <div className="col-span-5 space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 space-y-4">
              <CoordinationGraphViewer graph={data?.graph} />
            </div>
            <div className="col-span-1 space-y-4">
              <ResourceAllocationGrid resources={data?.resources} />
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1">
            <div className="col-span-1 space-y-4">
              <ConflictResolutionTable conflicts={data?.conflicts} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <div className="col-span-1">
          <CoordinationLedger ledgerEntries={data?.ledger} />
        </div>
      </div>
    </div>
  );
}
