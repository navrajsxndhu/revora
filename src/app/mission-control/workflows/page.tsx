import React from 'react';
import { EnterpriseWorkflowOverview } from "@/components/mission-control/workflows/enterprise-workflow-overview";
import { WorkflowRegistryDashboard } from "@/components/mission-control/workflows/workflow-registry-dashboard";
import { ActiveWorkflowCenter } from "@/components/mission-control/workflows/active-workflow-center";
import { HumanTaskOperationsCenter } from "@/components/mission-control/workflows/human-task-operations-center";
import { TaskQueueDashboard } from "@/components/mission-control/workflows/task-queue-dashboard";
import { ManualApprovalCenter } from "@/components/mission-control/workflows/manual-approval-center";
import { WorkflowEscalationDashboard } from "@/components/mission-control/workflows/workflow-escalation-dashboard";
import { BusinessCaseTimeline } from "@/components/mission-control/workflows/business-case-timeline";
import { WorkflowCheckpointMatrix } from "@/components/mission-control/workflows/workflow-checkpoint-matrix";
import { WorkflowGovernanceBoard } from "@/components/mission-control/workflows/workflow-governance-board";
import { WorkflowComplianceMatrix } from "@/components/mission-control/workflows/workflow-compliance-matrix";
import { WorkflowValidationCenter } from "@/components/mission-control/workflows/workflow-validation-center";
import { ConstitutionalWorkflowLedger } from "@/components/mission-control/workflows/constitutional-workflow-ledger";
import { WorkflowHealthDashboard } from "@/components/mission-control/workflows/workflow-health-dashboard";
import { ExecutiveWorkflowCommandCenter } from "@/components/mission-control/workflows/executive-workflow-command-center";

export default function WorkflowsGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Workflow & Case Management</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing process execution and task orchestration</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">WORKFLOW ORCHESTRATION: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveWorkflowCommandCenter />
        <EnterpriseWorkflowOverview />
        <WorkflowValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WorkflowRegistryDashboard />
        <ActiveWorkflowCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <HumanTaskOperationsCenter />
        <TaskQueueDashboard />
        <ManualApprovalCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WorkflowEscalationDashboard />
        <BusinessCaseTimeline />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <WorkflowCheckpointMatrix />
        <WorkflowGovernanceBoard />
        <WorkflowComplianceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalWorkflowLedger />
        <WorkflowHealthDashboard />
      </div>
    </div>
  );
}
