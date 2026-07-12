"use client";

import { useEffect, useState } from "react";
import { PlanningIndexPanel } from "@/components/mission-control/planning/planning-index-panel";
import { GoalDefinitionTable } from "@/components/mission-control/planning/goal-definition-table";
import { DependencyGraphViewer } from "@/components/mission-control/planning/dependency-graph-viewer";
import { MilestoneSequenceTable } from "@/components/mission-control/planning/milestone-sequence-table";
import { PlanningLedger } from "@/components/mission-control/planning/planning-ledger";
import { PlanningSimulationPanel } from "@/components/mission-control/planning/planning-simulation-panel";
import { ExecutionRoadmapViewer } from "@/components/mission-control/planning/execution-roadmap-viewer";
import { PlanningPerformanceTimeline } from "@/components/mission-control/planning/planning-performance-timeline";
import { Loader2, Map } from "lucide-react";

export default function OperationalPlanningPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation this would fetch from /api/planning/index and related routes
    setTimeout(() => {
      setData({
        index: {
          planningScore: 82.5,
          planningClass: "INSTITUTIONAL",
          planningMaturity: "SYSTEMATIC_STRATEGY"
        },
        goals: [
          { name: "Reduce MTTR", description: "Aggressively optimize operations to drive Mean Time To Recovery below critical thresholds.", targetMetrics: [{ metric: "MTTR_MINUTES", targetValue: 5, comparator: "LESS_THAN" }] },
          { name: "Complete Cloud Migration", description: "Decommission legacy datacenters and transition fully to distributed infrastructure.", targetMetrics: [{ metric: "LEGACY_NODE_COUNT", targetValue: 0, comparator: "LESS_THAN" }, { metric: "SURVIVABILITY_INDEX", targetValue: 95, comparator: "GREATER_THAN" }] }
        ],
        dependencies: [
          { sourceId: "M1", targetId: "M2", type: "BLOCKING" },
          { sourceId: "M2", targetId: "M3", type: "BLOCKING" },
          { sourceId: "M3", targetId: "M4", type: "BLOCKING" },
          { sourceId: "M4", targetId: "M5", type: "BLOCKING" }
        ],
        milestones: [
          { id: "M1", name: "Audit Infrastructure", executionOrder: 1, completionStatus: "COMPLETED" },
          { id: "M2", name: "Provision Parallel Environment", executionOrder: 2, completionStatus: "IN_PROGRESS" },
          { id: "M3", name: "Migrate State", executionOrder: 3, completionStatus: "PENDING" },
          { id: "M4", name: "Cutover Traffic", executionOrder: 4, completionStatus: "PENDING" },
          { id: "M5", name: "Decommission Legacy", executionOrder: 5, completionStatus: "PENDING" }
        ],
        ledger: [
          { planName: "Project Alpha", planningObjective: "Reduce MTTR", planningScore: 85.2, status: "IN_PROGRESS", createdAt: new Date(Date.now() - 86400000).toISOString() },
          { planName: "Legacy Deprecation", planningObjective: "Eliminate Technical Debt", planningScore: 92.1, status: "COMPLETED", createdAt: new Date(Date.now() - 86400000 * 3).toISOString() }
        ],
        simulation: {
          projectedCompletion: new Date(Date.now() + 86400000 * 7).toISOString(),
          survivabilityProjection: 98.5
        },
        timeline: [30, 35, 45, 55, 60, 68, 75, 78, 80, 82.5]
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
            <Map className="h-6 w-6 text-indigo-400" />
            The Operational Planning Plane
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic orchestration of strategic objectives into mathematically optimized execution roadmaps.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <PlanningIndexPanel data={data?.index} />
        </div>
        <div className="col-span-2 space-y-4">
          <PlanningPerformanceTimeline timelineData={data?.timeline} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-7">
        <div className="col-span-2 space-y-4">
          <GoalDefinitionTable goals={data?.goals} />
          <PlanningSimulationPanel simulation={data?.simulation} />
        </div>
        <div className="col-span-5 space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <div className="col-span-1 space-y-4">
              <DependencyGraphViewer dependencies={data?.dependencies} />
            </div>
            <div className="col-span-1 space-y-4">
              <MilestoneSequenceTable milestones={data?.milestones} />
            </div>
            <div className="col-span-1 space-y-4">
              <ExecutionRoadmapViewer milestones={data?.milestones} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <div className="col-span-1">
          <PlanningLedger ledgerEntries={data?.ledger} />
        </div>
      </div>
    </div>
  );
}
