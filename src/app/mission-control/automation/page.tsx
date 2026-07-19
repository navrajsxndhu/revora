import React from 'react';
import { AutomationOperationsCenter } from "@/components/mission-control/automation/automation-operations-center";
import { RobotFleetDashboard } from "@/components/mission-control/automation/robot-fleet-dashboard";
import { WorkflowExecutionCenter } from "@/components/mission-control/automation/workflow-execution-center";
import { TriggerManagementBoard } from "@/components/mission-control/automation/trigger-management-board";
import { AutomationScheduleDashboard } from "@/components/mission-control/automation/automation-schedule-dashboard";
import { QueueOperationsCenter } from "@/components/mission-control/automation/queue-operations-center";
import { RobotAssignmentMatrix } from "@/components/mission-control/automation/robot-assignment-matrix";
import { AutomationApprovalBoard } from "@/components/mission-control/automation/automation-approval-board";
import { AutomationHealthDashboard } from "@/components/mission-control/automation/automation-health-dashboard";
import { ExceptionManagementCenter } from "@/components/mission-control/automation/exception-management-center";
import { CredentialGovernanceCenter } from "@/components/mission-control/automation/credential-governance-center";
import { AutomationEvidenceLedger } from "@/components/mission-control/automation/automation-evidence-ledger";
import { LifecycleManagementDashboard } from "@/components/mission-control/automation/lifecycle-management-dashboard";
import { GovernanceOperationsCenter } from "@/components/mission-control/automation/governance-operations-center";
import { ConstitutionalAutomationDashboard } from "@/components/mission-control/automation/constitutional-automation-dashboard";

export default function AutomationGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Automation & Robotics Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing robots, workflows, and execution triggers</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">AUTOMATION GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AutomationOperationsCenter />
        <RobotFleetDashboard />
        <WorkflowExecutionCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TriggerManagementBoard />
        <AutomationScheduleDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <QueueOperationsCenter />
        <RobotAssignmentMatrix />
        <AutomationApprovalBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AutomationHealthDashboard />
        <ExceptionManagementCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CredentialGovernanceCenter />
        <LifecycleManagementDashboard />
        <AutomationEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GovernanceOperationsCenter />
        <ConstitutionalAutomationDashboard />
      </div>
    </div>
  );
}
