import React from 'react';
import { EnterpriseProjectOverview } from "@/components/mission-control/projects/enterprise-project-overview";
import { ActiveProjects } from "@/components/mission-control/projects/active-projects";
import { ProjectLifecycleCenter } from "@/components/mission-control/projects/project-lifecycle-center";
import { MilestoneTracker } from "@/components/mission-control/projects/milestone-tracker";
import { WorkPackageRegistry } from "@/components/mission-control/projects/work-package-registry";
import { TaskExecutionCenter } from "@/components/mission-control/projects/task-execution-center";
import { DependencyMatrix } from "@/components/mission-control/projects/dependency-matrix";
import { CriticalPathMonitor } from "@/components/mission-control/projects/critical-path-monitor";
import { DeliverableCenter } from "@/components/mission-control/projects/deliverable-center";
import { ProjectApprovalBoard } from "@/components/mission-control/projects/project-approval-board";
import { ScheduleDashboard } from "@/components/mission-control/projects/schedule-dashboard";
import { ResourceAllocationMatrix } from "@/components/mission-control/projects/resource-allocation-matrix";
import { ProjectValidationCenter } from "@/components/mission-control/projects/project-validation-center";
import { ConstitutionalLedger } from "@/components/mission-control/projects/constitutional-ledger";
import { ExecutiveProjectDashboard } from "@/components/mission-control/projects/executive-project-dashboard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Project Delivery & Execution Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing project execution</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">STATUS: OPTIMAL</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveProjectDashboard />
        <EnterpriseProjectOverview />
        <ProjectValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActiveProjects />
        <ProjectLifecycleCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MilestoneTracker />
        <WorkPackageRegistry />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TaskExecutionCenter />
        <DependencyMatrix />
        <CriticalPathMonitor />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DeliverableCenter />
        <ProjectApprovalBoard />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScheduleDashboard />
        <ResourceAllocationMatrix />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ConstitutionalLedger />
      </div>
    </div>
  );
}
