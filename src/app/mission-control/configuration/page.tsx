import React from 'react';
import { RuntimeConfigurationCenter } from "@/components/mission-control/configuration/runtime-configuration-center";
import { EnvironmentConfigurationDashboard } from "@/components/mission-control/configuration/environment-configuration-dashboard";
import { FeatureFlagOperationsCenter } from "@/components/mission-control/configuration/feature-flag-operations-center";
import { ConfigurationProfileDashboard } from "@/components/mission-control/configuration/configuration-profile-dashboard";
import { ConfigurationBaselineCenter } from "@/components/mission-control/configuration/configuration-baseline-center";
import { RolloutManagementDashboard } from "@/components/mission-control/configuration/rollout-management-dashboard";
import { SecretReferenceCenter } from "@/components/mission-control/configuration/secret-reference-center";
import { ConfigurationApprovalBoard } from "@/components/mission-control/configuration/configuration-approval-board";
import { RuntimeProfileDashboard } from "@/components/mission-control/configuration/runtime-profile-dashboard";
import { TenantConfigurationCenter } from "@/components/mission-control/configuration/tenant-configuration-center";
import { ConfigurationAuditDashboard } from "@/components/mission-control/configuration/configuration-audit-dashboard";
import { ConfigurationEvidenceLedger } from "@/components/mission-control/configuration/configuration-evidence-ledger";
import { ConfigurationPolicyCenter } from "@/components/mission-control/configuration/configuration-policy-center";
import { DeploymentConfigurationDashboard } from "@/components/mission-control/configuration/deployment-configuration-dashboard";
import { EnterpriseConfigurationOverview } from "@/components/mission-control/configuration/enterprise-configuration-overview";

export default function ConfigurationGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Configuration & Feature Flag Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing runtime configurations, feature flags, and rollouts</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">CONFIGURATION GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RuntimeConfigurationCenter />
        <EnvironmentConfigurationDashboard />
        <FeatureFlagOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConfigurationProfileDashboard />
        <ConfigurationBaselineCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RolloutManagementDashboard />
        <SecretReferenceCenter />
        <ConfigurationApprovalBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RuntimeProfileDashboard />
        <TenantConfigurationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ConfigurationAuditDashboard />
        <ConfigurationEvidenceLedger />
        <ConfigurationPolicyCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DeploymentConfigurationDashboard />
        <EnterpriseConfigurationOverview />
      </div>
    </div>
  );
}
