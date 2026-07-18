import React from "react";
import { Brain, Activity, ShieldCheck } from "lucide-react";
import { IntelligenceOverview } from "@/components/mission-control/intelligence/intelligence-overview";
import { ExecutiveKPICenter } from "@/components/mission-control/intelligence/executive-kpi-center";
import { EnterpriseMetrics } from "@/components/mission-control/intelligence/enterprise-metrics";
import { BusinessObjectives } from "@/components/mission-control/intelligence/business-objectives";
import { StrategicInitiatives } from "@/components/mission-control/intelligence/strategic-initiatives";
import { OperationalInsights } from "@/components/mission-control/intelligence/operational-insights";
import { EvidenceCorrelation } from "@/components/mission-control/intelligence/evidence-correlation";
import { DepartmentScorecards } from "@/components/mission-control/intelligence/department-scorecards";
import { EnterpriseHealth } from "@/components/mission-control/intelligence/enterprise-health";
import { BusinessImpactCenter } from "@/components/mission-control/intelligence/business-impact-center";
import { StrategicRiskDashboard } from "@/components/mission-control/intelligence/strategic-risk-dashboard";
import { ExecutiveBriefings } from "@/components/mission-control/intelligence/executive-briefings";
import { DecisionHistory } from "@/components/mission-control/intelligence/decision-history";
import { IntelligenceSimulator } from "@/components/mission-control/intelligence/intelligence-simulator";
import { ExecutiveIntelligenceDashboard } from "@/components/mission-control/intelligence/executive-intelligence-dashboard";

export const metadata = {
  title: "Intelligence Command | Revora Mission Control",
};

export default function IntelligenceCommandCenterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-300 font-sans p-4 space-y-4">
      {/* Telemetry Header */}
      <header className="flex justify-between items-center border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-3">
          <Brain className="w-5 h-5 text-indigo-400" />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Enterprise Intelligence & Decision Support</h1>
            <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-1 flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              SYSTEM STATE: DETERMINISTIC | EVIDENCED
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="text-right">
            <div className="text-[10px] text-slate-500 font-mono">INTEGRITY</div>
            <div className="text-sm font-bold text-indigo-400 flex items-center justify-end">
              <ShieldCheck className="w-3 h-3 mr-1" /> STRICT
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-slate-500 font-mono">HEALTH INDEX</div>
            <div className="text-sm font-bold text-emerald-400 flex items-center justify-end">
              <Activity className="w-3 h-3 mr-1" /> 98.5%
            </div>
          </div>
        </div>
      </header>

      {/* Row 1: Executive Overview */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-12 h-[140px]">
          <IntelligenceOverview />
        </div>
      </div>

      {/* Row 2: KPIs & Health */}
      <div className="grid grid-cols-12 gap-4 h-[350px]">
        <div className="col-span-12 xl:col-span-8 h-full">
          <ExecutiveKPICenter />
        </div>
        <div className="col-span-12 xl:col-span-4 h-full">
          <EnterpriseHealth />
        </div>
      </div>

      {/* Row 3: Metrics & Scorecards */}
      <div className="grid grid-cols-12 gap-4 h-[400px]">
        <div className="col-span-12 xl:col-span-8 h-full">
          <EnterpriseMetrics />
        </div>
        <div className="col-span-12 xl:col-span-4 h-full">
          <DepartmentScorecards />
        </div>
      </div>

      {/* Row 4: Objectives & Initiatives */}
      <div className="grid grid-cols-12 gap-4 h-[350px]">
        <div className="col-span-12 xl:col-span-6 h-full">
          <BusinessObjectives />
        </div>
        <div className="col-span-12 xl:col-span-6 h-full">
          <StrategicInitiatives />
        </div>
      </div>

      {/* Row 5: Insights & Impact */}
      <div className="grid grid-cols-12 gap-4 h-[350px]">
        <div className="col-span-12 xl:col-span-8 h-full">
          <OperationalInsights />
        </div>
        <div className="col-span-12 xl:col-span-4 h-full">
          <BusinessImpactCenter />
        </div>
      </div>

      {/* Row 6: Risks & Correlation */}
      <div className="grid grid-cols-12 gap-4 h-[350px]">
        <div className="col-span-12 xl:col-span-6 h-full flex flex-col space-y-4">
          <div className="flex-1">
            <StrategicRiskDashboard />
          </div>
          <div className="flex-1">
            <EvidenceCorrelation />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6 h-full flex flex-col space-y-4">
          <div className="flex-1">
            <ExecutiveBriefings />
          </div>
          <div className="flex-1">
            <IntelligenceSimulator />
          </div>
        </div>
      </div>

      {/* Row 7: Ledger History */}
      <div className="grid grid-cols-12 gap-4 h-[250px]">
        <div className="col-span-12 h-full">
          <DecisionHistory />
        </div>
      </div>

      {/* Executive Footer */}
      <div className="pt-4 border-t border-slate-800">
        <ExecutiveIntelligenceDashboard />
      </div>
    </div>
  );
}
