import React from 'react';
import { ExtensionRegistryCenter } from "@/components/mission-control/extensibility/extension-registry-center";
import { MarketplaceDashboard } from "@/components/mission-control/extensibility/marketplace-dashboard";
import { SDKGovernanceCenter } from "@/components/mission-control/extensibility/s-d-k-governance-center";
import { ExtensionCompatibilityMatrix } from "@/components/mission-control/extensibility/extension-compatibility-matrix";
import { DeveloperOrganizationCenter } from "@/components/mission-control/extensibility/developer-organization-center";
import { WorkspaceOperationsDashboard } from "@/components/mission-control/extensibility/workspace-operations-dashboard";
import { PackageCertificationCenter } from "@/components/mission-control/extensibility/package-certification-center";
import { ExtensionPermissionMatrix } from "@/components/mission-control/extensibility/extension-permission-matrix";
import { MarketplaceApprovalCenter } from "@/components/mission-control/extensibility/marketplace-approval-center";
import { APIBundleDashboard } from "@/components/mission-control/extensibility/a-p-i-bundle-dashboard";
import { ExtensionInstallationCenter } from "@/components/mission-control/extensibility/extension-installation-center";
import { TenantExtensionDashboard } from "@/components/mission-control/extensibility/tenant-extension-dashboard";
import { CustomizationGovernanceCenter } from "@/components/mission-control/extensibility/customization-governance-center";
import { ExtensionExecutionLedger } from "@/components/mission-control/extensibility/extension-execution-ledger";
import { MarketplaceTelemetryDashboard } from "@/components/mission-control/extensibility/marketplace-telemetry-dashboard";

export default function ExtensibilityGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Extensibility & Developer Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing plugins, SDKs, and marketplace extensions</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">EXTENSIBILITY GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExtensionRegistryCenter />
        <MarketplaceDashboard />
        <SDKGovernanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DeveloperOrganizationCenter />
        <WorkspaceOperationsDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PackageCertificationCenter />
        <MarketplaceApprovalCenter />
        <APIBundleDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExtensionCompatibilityMatrix />
        <ExtensionPermissionMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ExtensionInstallationCenter />
        <TenantExtensionDashboard />
        <CustomizationGovernanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExtensionExecutionLedger />
        <MarketplaceTelemetryDashboard />
      </div>
    </div>
  );
}
