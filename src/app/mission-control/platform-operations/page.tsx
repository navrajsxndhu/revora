import React from 'react';
import { EnvironmentOperationsCenter } from "@/components/mission-control/platform-operations/environment-operations-center";
import { DeploymentDashboard } from "@/components/mission-control/platform-operations/deployment-dashboard";
import { ReleaseGovernanceCenter } from "@/components/mission-control/platform-operations/release-governance-center";
import { UpgradeOperationsBoard } from "@/components/mission-control/platform-operations/upgrade-operations-board";
import { RollbackCenter } from "@/components/mission-control/platform-operations/rollback-center";
import { ReleaseCalendarDashboard } from "@/components/mission-control/platform-operations/release-calendar-dashboard";
import { MaintenanceWindowCenter } from "@/components/mission-control/platform-operations/maintenance-window-center";
import { DeploymentEvidenceLedger } from "@/components/mission-control/platform-operations/deployment-evidence-ledger";
import { PlatformManifestCenter } from "@/components/mission-control/platform-operations/platform-manifest-center";
import { PlatformReadinessDashboard } from "@/components/mission-control/platform-operations/platform-readiness-dashboard";
import { ConfigurationGovernanceMatrix } from "@/components/mission-control/platform-operations/configuration-governance-matrix";
import { PlatformLifecycleDashboard } from "@/components/mission-control/platform-operations/platform-lifecycle-dashboard";
import { OperationalHealthCenter } from "@/components/mission-control/platform-operations/operational-health-center";
import { DeploymentDependencyMatrix } from "@/components/mission-control/platform-operations/deployment-dependency-matrix";
import { PlatformOperationsLedger } from "@/components/mission-control/platform-operations/platform-operations-ledger";

export default function PlatformOperationsPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Platform Operations & Deployment Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing environments, releases, and platform deployment</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">OPERATIONS GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnvironmentOperationsCenter />
        <DeploymentDashboard />
        <ReleaseGovernanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpgradeOperationsBoard />
        <RollbackCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ReleaseCalendarDashboard />
        <MaintenanceWindowCenter />
        <PlatformReadinessDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DeploymentEvidenceLedger />
        <PlatformOperationsLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PlatformManifestCenter />
        <ConfigurationGovernanceMatrix />
        <DeploymentDependencyMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlatformLifecycleDashboard />
        <OperationalHealthCenter />
      </div>
    </div>
  );
}
