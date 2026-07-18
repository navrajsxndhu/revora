import React from 'react';
import { EnterpriseAiOverview } from "@/components/mission-control/ai-governance/enterprise-ai-overview";
import { AiRegistryDashboard } from "@/components/mission-control/ai-governance/ai-registry-dashboard";
import { ModelInventoryCenter } from "@/components/mission-control/ai-governance/model-inventory-center";
import { AiDeploymentDashboard } from "@/components/mission-control/ai-governance/ai-deployment-dashboard";
import { AiApprovalCenter } from "@/components/mission-control/ai-governance/ai-approval-center";
import { AiRiskMatrix } from "@/components/mission-control/ai-governance/ai-risk-matrix";
import { AiEvaluationDashboard } from "@/components/mission-control/ai-governance/ai-evaluation-dashboard";
import { ExplainabilityDashboard } from "@/components/mission-control/ai-governance/explainability-dashboard";
import { ResponsibleAiCenter } from "@/components/mission-control/ai-governance/responsible-ai-center";
import { RegulatoryComplianceMatrix } from "@/components/mission-control/ai-governance/regulatory-compliance-matrix";
import { AiValidationCenter } from "@/components/mission-control/ai-governance/ai-validation-center";
import { ConstitutionalAiLedger } from "@/components/mission-control/ai-governance/constitutional-ai-ledger";
import { AiHealthDashboard } from "@/components/mission-control/ai-governance/ai-health-dashboard";
import { AiProviderDashboard } from "@/components/mission-control/ai-governance/ai-provider-dashboard";
import { ExecutiveAiGovernanceDashboard } from "@/components/mission-control/ai-governance/executive-ai-governance-dashboard";

export default function AiGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise AI Governance & Model Risk</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing external AI systems, LLMs, and Intelligent Automation</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-500 font-mono text-sm">AI GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveAiGovernanceDashboard />
        <EnterpriseAiOverview />
        <AiValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AiRegistryDashboard />
        <ModelInventoryCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AiProviderDashboard />
        <AiDeploymentDashboard />
        <AiApprovalCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AiEvaluationDashboard />
        <ExplainabilityDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AiRiskMatrix />
        <ResponsibleAiCenter />
        <RegulatoryComplianceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalAiLedger />
        <AiHealthDashboard />
      </div>
    </div>
  );
}
