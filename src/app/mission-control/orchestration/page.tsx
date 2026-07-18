"use client";

import React from "react";
import { OrchestrationOverview } from "@/components/mission-control/orchestration/orchestration-overview";
import { ExecutionCenter } from "@/components/mission-control/orchestration/execution-center";
import { PipelineRegistry } from "@/components/mission-control/orchestration/pipeline-registry";
import { WorkflowOrchestrator } from "@/components/mission-control/orchestration/workflow-orchestrator";
import { ExecutionQueue } from "@/components/mission-control/orchestration/execution-queue";
import { DependencyResolver } from "@/components/mission-control/orchestration/dependency-resolver";
import { ExecutionReservations } from "@/components/mission-control/orchestration/execution-reservations";
import { ExecutionLocks } from "@/components/mission-control/orchestration/execution-locks";
import { ApprovalCenter } from "@/components/mission-control/orchestration/approval-center";
import { ValidationCenter } from "@/components/mission-control/orchestration/validation-center";
import { ExecutionCheckpoints } from "@/components/mission-control/orchestration/execution-checkpoints";
import { ExecutionTimeline } from "@/components/mission-control/orchestration/execution-timeline";
import { ExecutionHealthDashboard } from "@/components/mission-control/orchestration/execution-health-dashboard";
import { ExecutionSimulator } from "@/components/mission-control/orchestration/execution-simulator";
import { ExecutiveOrchestrationDashboard } from "@/components/mission-control/orchestration/executive-orchestration-dashboard";

export default function OrchestrationMissionControl() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 p-4 font-sans selection:bg-indigo-500/30">
      <div className="max-w-[1600px] mx-auto space-y-4">
        <OrchestrationOverview />
        
        <div className="grid grid-cols-12 gap-4 h-[400px]">
          <div className="col-span-8 flex flex-col space-y-4">
            <div className="flex-1">
              <ExecutionCenter />
            </div>
            <div className="h-32">
              <PipelineRegistry />
            </div>
          </div>
          <div className="col-span-4 flex flex-col space-y-4">
            <div className="flex-1">
              <WorkflowOrchestrator />
            </div>
            <div className="h-32">
              <ExecutionQueue />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 h-[350px]">
          <div className="col-span-3">
            <DependencyResolver />
          </div>
          <div className="col-span-3">
            <div className="h-1/2 pb-2"><ExecutionReservations /></div>
            <div className="h-1/2 pt-2"><ExecutionLocks /></div>
          </div>
          <div className="col-span-3">
            <ApprovalCenter />
          </div>
          <div className="col-span-3">
            <ValidationCenter />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 h-[350px]">
          <div className="col-span-4">
            <ExecutionCheckpoints />
          </div>
          <div className="col-span-4">
            <ExecutionTimeline />
          </div>
          <div className="col-span-4 flex flex-col space-y-4">
            <div className="flex-1"><ExecutionHealthDashboard /></div>
            <div className="h-32"><ExecutionSimulator /></div>
          </div>
        </div>

        <ExecutiveOrchestrationDashboard />
      </div>
    </div>
  );
}
