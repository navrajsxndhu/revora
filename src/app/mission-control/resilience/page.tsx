"use client";

import React from "react";
import { ResilienceOverview } from "@/components/mission-control/resilience/resilience-overview";
import { BusinessContinuityCenter } from "@/components/mission-control/resilience/business-continuity-center";
import { RecoveryPlanRegistry } from "@/components/mission-control/resilience/recovery-plan-registry";
import { RecoveryExecutionCenter } from "@/components/mission-control/resilience/recovery-execution-center";
import { FailoverCenter } from "@/components/mission-control/resilience/failover-center";
import { FailbackCenter } from "@/components/mission-control/resilience/failback-center";
import { BusinessImpactAnalysis } from "@/components/mission-control/resilience/business-impact-analysis";
import { RecoveryValidationCenter } from "@/components/mission-control/resilience/recovery-validation-center";
import { RecoveryCheckpoints } from "@/components/mission-control/resilience/recovery-checkpoints";
import { RecoveryReadiness } from "@/components/mission-control/resilience/recovery-readiness";
import { ResilienceExercises } from "@/components/mission-control/resilience/resilience-exercises";
import { RecoveryTimeline } from "@/components/mission-control/resilience/recovery-timeline";
import { ContinuityLedger } from "@/components/mission-control/resilience/continuity-ledger";
import { ResilienceSimulator } from "@/components/mission-control/resilience/resilience-simulator";
import { ExecutiveResilienceDashboard } from "@/components/mission-control/resilience/executive-resilience-dashboard";

export default function ResilienceMissionControl() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 p-4 font-sans selection:bg-emerald-500/30">
      <div className="max-w-[1600px] mx-auto space-y-4">
        <ResilienceOverview />
        
        <div className="grid grid-cols-12 gap-4 h-[400px]">
          <div className="col-span-8 flex flex-col space-y-4">
            <div className="flex-1">
              <BusinessContinuityCenter />
            </div>
            <div className="h-40 flex space-x-4">
              <div className="w-1/2">
                <RecoveryPlanRegistry />
              </div>
              <div className="w-1/2">
                <RecoveryExecutionCenter />
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-col space-y-4">
            <div className="h-1/2">
              <FailoverCenter />
            </div>
            <div className="h-1/2">
              <FailbackCenter />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 h-[350px]">
          <div className="col-span-3">
            <BusinessImpactAnalysis />
          </div>
          <div className="col-span-3">
            <RecoveryValidationCenter />
          </div>
          <div className="col-span-3">
            <RecoveryCheckpoints />
          </div>
          <div className="col-span-3">
            <RecoveryReadiness />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 h-[350px]">
          <div className="col-span-4">
            <ResilienceExercises />
          </div>
          <div className="col-span-4">
            <RecoveryTimeline />
          </div>
          <div className="col-span-4 flex flex-col space-y-4">
            <div className="flex-1"><ContinuityLedger /></div>
            <div className="h-32"><ResilienceSimulator /></div>
          </div>
        </div>

        <ExecutiveResilienceDashboard />
      </div>
    </div>
  );
}
