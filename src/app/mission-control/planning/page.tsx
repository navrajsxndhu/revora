"use client";

import React from "react";
import { PlanningOverview } from "@/components/mission-control/planning/planning-overview";
import { EnterpriseCapacity } from "@/components/mission-control/planning/enterprise-capacity";
import { ResourceRegistry } from "@/components/mission-control/planning/resource-registry";
import { CapacityAllocations } from "@/components/mission-control/planning/capacity-allocations";
import { DemandCenter } from "@/components/mission-control/planning/demand-center";
import { CapacityUtilization } from "@/components/mission-control/planning/capacity-utilization";
import { ConstraintCenter } from "@/components/mission-control/planning/constraint-center";
import { PlanningAssessments } from "@/components/mission-control/planning/planning-assessments";
import { PlanningValidation } from "@/components/mission-control/planning/planning-validation";
import { PlanningScenarios } from "@/components/mission-control/planning/planning-scenarios";
import { CapacityTimeline } from "@/components/mission-control/planning/capacity-timeline";
import { PlanningLedger } from "@/components/mission-control/planning/planning-ledger";
import { PlanningHealthDashboard } from "@/components/mission-control/planning/planning-health-dashboard";
import { PlanningSimulator } from "@/components/mission-control/planning/planning-simulator";
import { ExecutivePlanningDashboard } from "@/components/mission-control/planning/executive-planning-dashboard";

export default function PlanningMissionControl() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 p-4 font-sans selection:bg-indigo-500/30">
      <div className="max-w-[1600px] mx-auto space-y-4">
        <PlanningOverview />
        
        <div className="grid grid-cols-12 gap-4 h-[400px]">
          <div className="col-span-8 flex flex-col space-y-4">
            <div className="flex-1">
              <EnterpriseCapacity />
            </div>
            <div className="h-40 flex space-x-4">
              <div className="w-1/2">
                <ResourceRegistry />
              </div>
              <div className="w-1/2">
                <CapacityAllocations />
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-col space-y-4">
            <div className="h-1/2">
              <DemandCenter />
            </div>
            <div className="h-1/2">
              <CapacityUtilization />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 h-[350px]">
          <div className="col-span-3">
            <ConstraintCenter />
          </div>
          <div className="col-span-3">
            <PlanningAssessments />
          </div>
          <div className="col-span-3">
            <PlanningValidation />
          </div>
          <div className="col-span-3">
            <PlanningHealthDashboard />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 h-[350px]">
          <div className="col-span-4">
            <PlanningScenarios />
          </div>
          <div className="col-span-4">
            <CapacityTimeline />
          </div>
          <div className="col-span-4 flex flex-col space-y-4">
            <div className="flex-1"><PlanningLedger /></div>
            <div className="h-32"><PlanningSimulator /></div>
          </div>
        </div>

        <ExecutivePlanningDashboard />
      </div>
    </div>
  );
}
