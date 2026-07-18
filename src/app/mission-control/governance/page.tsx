import React from "react";
import { GovernanceOverview } from "@/components/mission-control/governance/governance-overview";
import { ActivePolicies } from "@/components/mission-control/governance/active-policies";
import { EnterpriseRiskRegister } from "@/components/mission-control/governance/enterprise-risk-register";
import { GovernanceControlsMatrix } from "@/components/mission-control/governance/governance-controls-matrix";
import { PolicyExceptions } from "@/components/mission-control/governance/policy-exceptions";
import { GovernanceAssessmentTimeline } from "@/components/mission-control/governance/governance-assessment-timeline";
import { GovernanceSimulator } from "@/components/mission-control/governance/governance-simulator";
import { ExecutiveGovernanceDashboard } from "@/components/mission-control/governance/executive-governance-dashboard";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Governance, Risk & Policy | Mission Control",
};

export default function GovernanceMissionControlPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 p-6 font-mono text-sm selection:bg-indigo-500/30">
      <header className="mb-6 flex justify-between items-end border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <ShieldCheck className="w-8 h-8 text-emerald-500" />
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight uppercase font-sans">Enterprise Governance Center</h1>
          </div>
          <div className="flex space-x-6 text-xs text-slate-400">
            <span>SYS.STATE: <span className="text-emerald-400">ENFORCING</span></span>
            <span>VER: <span className="text-indigo-400">v1.128.0</span></span>
            <span>LAST.ASSESS: <span className="text-slate-300">T-14M</span></span>
            <span>CONST.AUTH: <span className="text-emerald-400">ACTIVE</span></span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-slate-500 mb-1">ENTERPRISE GOVERNANCE INDEX</div>
          <div className="text-3xl font-bold text-emerald-400">98.4<span className="text-lg text-emerald-500/50">%</span></div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        {/* Section 1: Governance Overview */}
        <div className="xl:col-span-12">
          <GovernanceOverview />
        </div>

        {/* Section 2: Policies & Exceptions */}
        <div className="xl:col-span-7 h-[400px]">
          <ActivePolicies />
        </div>
        <div className="xl:col-span-5 h-[400px]">
          <PolicyExceptions />
        </div>

        {/* Section 3: Risk Register */}
        <div className="xl:col-span-12">
          <EnterpriseRiskRegister />
        </div>

        {/* Section 4: Controls Matrix */}
        <div className="xl:col-span-12">
          <GovernanceControlsMatrix />
        </div>

        {/* Section 5 & 6: Timeline & Simulator */}
        <div className="xl:col-span-6 h-[500px]">
          <GovernanceAssessmentTimeline />
        </div>
        <div className="xl:col-span-6 h-[500px]">
          <GovernanceSimulator />
        </div>

        {/* Bottom: Executive Dash */}
        <div className="xl:col-span-12 mt-4">
          <ExecutiveGovernanceDashboard />
        </div>
      </div>
    </div>
  );
}
