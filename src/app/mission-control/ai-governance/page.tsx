import React from 'react';
import { AIModelRegistryDashboard } from "@/components/mission-control/ai-governance/ai-model-registry-dashboard";
import { PromptGovernanceCenter } from "@/components/mission-control/ai-governance/prompt-governance-center";
import { ModelApprovalMatrix } from "@/components/mission-control/ai-governance/model-approval-matrix";
import { ProviderGovernanceDashboard } from "@/components/mission-control/ai-governance/provider-governance-dashboard";
import { AIExecutionCenter } from "@/components/mission-control/ai-governance/ai-execution-center";
import { DatasetApprovalDashboard } from "@/components/mission-control/ai-governance/dataset-approval-dashboard";
import { EvaluationBenchmarkCenter } from "@/components/mission-control/ai-governance/evaluation-benchmark-center";
import { SafetyGovernanceBoard } from "@/components/mission-control/ai-governance/safety-governance-board";
import { BiasAssessmentCenter } from "@/components/mission-control/ai-governance/bias-assessment-center";
import { AIAuditDashboard } from "@/components/mission-control/ai-governance/ai-audit-dashboard";
import { AIComplianceMatrix } from "@/components/mission-control/ai-governance/ai-compliance-matrix";
import { ModelDeploymentCenter } from "@/components/mission-control/ai-governance/model-deployment-center";
import { InferenceEvidenceLedger } from "@/components/mission-control/ai-governance/inference-evidence-ledger";
import { AIExecutionTimeline } from "@/components/mission-control/ai-governance/ai-execution-timeline";
import { ConstitutionalAIOverview } from "@/components/mission-control/ai-governance/constitutional-ai-overview";

export default function AIGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise AI & Model Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing models, prompts, safety, and inference evidence</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-fuchsia-950 border border-fuchsia-900 rounded-md">
            <span className="text-fuchsia-400 font-mono text-sm">AI GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConstitutionalAIOverview />
        <AIModelRegistryDashboard />
        <ModelDeploymentCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ModelApprovalMatrix />
        <ProviderGovernanceDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PromptGovernanceCenter />
        <DatasetApprovalDashboard />
        <EvaluationBenchmarkCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SafetyGovernanceBoard />
        <BiasAssessmentCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AIExecutionCenter />
        <AIExecutionTimeline />
        <InferenceEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AIAuditDashboard />
        <AIComplianceMatrix />
      </div>
    </div>
  );
}
