import React from 'react';
import { ProcessGovernanceOverview } from "@/components/mission-control/process-governance/process-governance-overview";
import { EnterpriseProcessRegistry } from "@/components/mission-control/process-governance/enterprise-process-registry";
import { ProcedureCenter } from "@/components/mission-control/process-governance/procedure-center";
import { WorkflowCenter } from "@/components/mission-control/process-governance/workflow-center";
import { DecisionGateCenter } from "@/components/mission-control/process-governance/decision-gate-center";
import { ControlPointCenter } from "@/components/mission-control/process-governance/control-point-center";
import { BusinessRuleCenter } from "@/components/mission-control/process-governance/business-rule-center";
import { ExecutionCenter } from "@/components/mission-control/process-governance/execution-center";
import { ProcessValidation } from "@/components/mission-control/process-governance/process-validation";
import { ProcessComplianceCenter } from "@/components/mission-control/process-governance/process-compliance-center";
import { ProcessTimeline } from "@/components/mission-control/process-governance/process-timeline";
import { ProcessLedger } from "@/components/mission-control/process-governance/process-ledger";
import { ProcessSimulator } from "@/components/mission-control/process-governance/process-simulator";
import { ProcessAssessments } from "@/components/mission-control/process-governance/process-assessments";
import { ExecutiveProcessDashboard } from "@/components/mission-control/process-governance/executive-process-dashboard";

export default function ProcessGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Process Operations Center</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing business processes</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">STATUS: OPTIMAL</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveProcessDashboard />
        <ProcessGovernanceOverview />
        <ProcessAssessments />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EnterpriseProcessRegistry />
        <ProcedureCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WorkflowCenter />
        <ExecutionCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DecisionGateCenter />
        <ControlPointCenter />
        <BusinessRuleCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProcessValidation />
        <ProcessComplianceCenter />
        <ProcessSimulator />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProcessTimeline />
        <ProcessLedger />
      </div>
    </div>
  );
}
