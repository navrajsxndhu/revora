"use client";

import { useEffect, useState } from "react";
import { ExecutionIndexPanel } from "@/components/mission-control/execution/execution-index-panel";
import { ExecutionTimeline } from "@/components/mission-control/execution/execution-timeline";
import { ExecutionStageTable } from "@/components/mission-control/execution/execution-stage-table";
import { ValidationChecklist } from "@/components/mission-control/execution/validation-checklist";
import { RollbackPlanViewer } from "@/components/mission-control/execution/rollback-plan-viewer";
import { ExecutionReplayViewer } from "@/components/mission-control/execution/execution-replay-viewer";
import { ExecutionAuditFeed } from "@/components/mission-control/execution/execution-audit-feed";
import { ExecutionHealthCard } from "@/components/mission-control/execution/execution-health-card";
import { Loader2, PlayCircle } from "lucide-react";

export default function OperationalExecutionPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation this would fetch from /api/execution/index and related
    setTimeout(() => {
      setData({
        index: {
          executionScore: 95.0,
          executionClass: "EXECUTION_CIVILIZATION",
          executionMaturity: "PERFECTLY_REPRODUCIBLE"
        },
        timeline: {
          totalExecutions: 820,
          completedExecutions: 818,
          activeExecutions: 2
        },
        stages: [
          { stageName: "PRE_FLIGHT_VALIDATION", executionOrder: 1, validationStatus: "PASSED", prerequisites: [] },
          { stageName: "CANARY_DEPLOYMENT", executionOrder: 2, validationStatus: "PASSED", prerequisites: ["PRE_FLIGHT_VALIDATION"] },
          { stageName: "GLOBAL_ROLLOUT", executionOrder: 3, validationStatus: "PENDING", prerequisites: ["CANARY_DEPLOYMENT"] }
        ],
        validations: [
          { gate: "CONSTITUTIONAL_COMPLIANCE", status: "PASSED", reason: "No active constitutional limits violated." },
          { gate: "INCIDENT_FREEZE_CHECK", status: "PASSED", reason: "Zero active incidents." },
          { gate: "TREASURY_CAPACITY_VERIFIED", status: "PASSED", reason: "Sufficient operational treasury capacity exists for rollout." }
        ],
        rollback: {
          rollbackVersion: "rb_1704067200000",
          recoveryStrategy: "DETERMINISTIC_INVERT_OPERATION"
        },
        replay: {
          replayChecksum: "sha256_b4f9c8d1e2a3f4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9",
          replayDuration: 142
        },
        logs: [
          "Compiled execution plan for CANARY_5_PERCENT strategy.",
          "Validation gate CONSTITUTIONAL_COMPLIANCE verified.",
          "Validation gate INCIDENT_FREEZE_CHECK verified.",
          "Generated deterministic rollback plan version rb_1704067200000.",
          "Execution stage PRE_FLIGHT_VALIDATION completed.",
          "Execution stage CANARY_DEPLOYMENT completed.",
          "Orchestrator holding at GLOBAL_ROLLOUT pending final validation."
        ],
        health: {
          status: "OPERATIONAL",
          lastVerified: new Date().toISOString()
        }
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
            <PlayCircle className="h-6 w-6 text-emerald-400" />
            The Operational Execution Plane
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic execution tracking, immutable orchestration, and replayable timelines.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <ExecutionIndexPanel data={data?.index} />
        </div>
        <div className="col-span-2 space-y-4">
          <ExecutionTimeline timeline={data?.timeline} />
          <ExecutionHealthCard health={data?.health} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <ExecutionStageTable stages={data?.stages} />
        </div>
        <div className="col-span-1">
          <ValidationChecklist validations={data?.validations} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-3 space-y-4">
          <RollbackPlanViewer rollback={data?.rollback} />
          <ExecutionReplayViewer replay={data?.replay} />
        </div>
        <div className="col-span-4">
          <ExecutionAuditFeed logs={data?.logs} />
        </div>
      </div>
    </div>
  );
}
