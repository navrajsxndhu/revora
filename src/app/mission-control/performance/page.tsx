import React from 'react';
import { EnterprisePerformanceOverview } from "@/components/mission-control/performance/enterprise-performance-overview";
import { CorporatePlanningDashboard } from "@/components/mission-control/performance/corporate-planning-dashboard";
import { StrategicObjectivesCenter } from "@/components/mission-control/performance/strategic-objectives-center";
import { ExecutiveScorecardDashboard } from "@/components/mission-control/performance/executive-scorecard-dashboard";
import { PlanningCalendarCenter } from "@/components/mission-control/performance/planning-calendar-center";
import { PerformanceTargetDashboard } from "@/components/mission-control/performance/performance-target-dashboard";
import { PlanningAssumptionsMatrix } from "@/components/mission-control/performance/planning-assumptions-matrix";
import { ExecutiveReviewCenter } from "@/components/mission-control/performance/executive-review-center";
import { PlanningGovernanceBoard } from "@/components/mission-control/performance/planning-governance-board";
import { CorporatePerformanceMatrix } from "@/components/mission-control/performance/corporate-performance-matrix";
import { PerformanceValidationCenter } from "@/components/mission-control/performance/performance-validation-center";
import { ConstitutionalPerformanceLedger } from "@/components/mission-control/performance/constitutional-performance-ledger";
import { PerformanceAuditDashboard } from "@/components/mission-control/performance/performance-audit-dashboard";
import { PlanningHealthDashboard } from "@/components/mission-control/performance/planning-health-dashboard";
import { ExecutiveCorporatePlanningDashboard } from "@/components/mission-control/performance/executive-corporate-planning-dashboard";

export default function PerformanceGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Performance & Corporate Planning</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing operational planning and enterprise targets</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">PERFORMANCE GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveCorporatePlanningDashboard />
        <EnterprisePerformanceOverview />
        <PerformanceValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CorporatePlanningDashboard />
        <StrategicObjectivesCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ExecutiveScorecardDashboard />
        <PerformanceTargetDashboard />
        <PlanningCalendarCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlanningAssumptionsMatrix />
        <CorporatePerformanceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ExecutiveReviewCenter />
        <PlanningGovernanceBoard />
        <PerformanceAuditDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalPerformanceLedger />
        <PlanningHealthDashboard />
      </div>
    </div>
  );
}
