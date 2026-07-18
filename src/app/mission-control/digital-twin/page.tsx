"use client";

import React from "react";
import { DigitalTwinOverview } from "@/components/mission-control/digital-twin/digital-twin-overview";
import { EnterpriseState } from "@/components/mission-control/digital-twin/enterprise-state";
import { SimulationScenarios } from "@/components/mission-control/digital-twin/simulation-scenarios";
import { SimulationExecutions } from "@/components/mission-control/digital-twin/simulation-executions";
import { ReplayCenter } from "@/components/mission-control/digital-twin/replay-center";
import { CheckpointManager } from "@/components/mission-control/digital-twin/checkpoint-manager";
import { ValidationCenter } from "@/components/mission-control/digital-twin/validation-center";
import { ImpactAnalysis } from "@/components/mission-control/digital-twin/impact-analysis";
import { FailureScenarios } from "@/components/mission-control/digital-twin/failure-scenarios";
import { RecoveryPlans } from "@/components/mission-control/digital-twin/recovery-plans";
import { StateTransitionTimeline } from "@/components/mission-control/digital-twin/state-transition-timeline";
import { DigitalTwinHealth } from "@/components/mission-control/digital-twin/digital-twin-health";
import { SimulationLedger } from "@/components/mission-control/digital-twin/simulation-ledger";
import { DigitalTwinSimulator } from "@/components/mission-control/digital-twin/digital-twin-simulator";
import { ExecutiveDigitalTwinDashboard } from "@/components/mission-control/digital-twin/executive-digital-twin-dashboard";

export default function DigitalTwinMissionControl() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 p-4 font-sans selection:bg-indigo-500/30">
      <div className="max-w-[1600px] mx-auto space-y-4">
        <DigitalTwinOverview />
        
        <div className="grid grid-cols-12 gap-4 h-[400px]">
          <div className="col-span-3">
            <EnterpriseState />
          </div>
          <div className="col-span-3">
            <SimulationScenarios />
          </div>
          <div className="col-span-6 flex flex-col space-y-4">
            <div className="flex-1">
              <SimulationExecutions />
            </div>
            <div className="h-32">
              <ReplayCenter />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 h-[350px]">
          <div className="col-span-3">
            <ValidationCenter />
          </div>
          <div className="col-span-3">
            <ImpactAnalysis />
          </div>
          <div className="col-span-3">
            <FailureScenarios />
          </div>
          <div className="col-span-3">
            <RecoveryPlans />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 h-[350px]">
          <div className="col-span-4">
            <StateTransitionTimeline />
          </div>
          <div className="col-span-4">
            <div className="h-1/2 pb-2"><CheckpointManager /></div>
            <div className="h-1/2 pt-2"><DigitalTwinHealth /></div>
          </div>
          <div className="col-span-4 flex flex-col space-y-4">
            <div className="flex-1"><SimulationLedger /></div>
            <div className="h-32"><DigitalTwinSimulator /></div>
          </div>
        </div>

        <ExecutiveDigitalTwinDashboard />
      </div>
    </div>
  );
}
