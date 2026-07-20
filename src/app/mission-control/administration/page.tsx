import React from 'react';
import { EnterpriseOrganizationCenter } from "@/components/mission-control/administration/enterprise-organization-center";
import { TenantOperationsDashboard } from "@/components/mission-control/administration/tenant-operations-dashboard";
import { AdministrativeRoleCenter } from "@/components/mission-control/administration/administrative-role-center";
import { PermissionGovernanceMatrix } from "@/components/mission-control/administration/permission-governance-matrix";
import { OrganizationHierarchyBoard } from "@/components/mission-control/administration/organization-hierarchy-board";
import { SubscriptionManagementCenter } from "@/components/mission-control/administration/subscription-management-center";
import { PlatformLicenseDashboard } from "@/components/mission-control/administration/platform-license-dashboard";
import { ConfigurationOperationsCenter } from "@/components/mission-control/administration/configuration-operations-center";
import { AdministrativeDelegationCenter } from "@/components/mission-control/administration/administrative-delegation-center";
import { PlatformRegistryDashboard } from "@/components/mission-control/administration/platform-registry-dashboard";
import { MaintenanceOperationsBoard } from "@/components/mission-control/administration/maintenance-operations-board";
import { AdministrativeLedgerCenter } from "@/components/mission-control/administration/administrative-ledger-center";
import { PlatformEvidenceDashboard } from "@/components/mission-control/administration/platform-evidence-dashboard";
import { TenantProvisioningCenter } from "@/components/mission-control/administration/tenant-provisioning-center";
import { ConstitutionalAdministrationOverview } from "@/components/mission-control/administration/constitutional-administration-overview";

export default function AdministrationGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Administration & Platform Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing tenants, organizations, subscriptions, and administrative delegation</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">ADMINISTRATION GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConstitutionalAdministrationOverview />
        <EnterpriseOrganizationCenter />
        <OrganizationHierarchyBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TenantOperationsDashboard />
        <TenantProvisioningCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AdministrativeRoleCenter />
        <PermissionGovernanceMatrix />
        <AdministrativeDelegationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SubscriptionManagementCenter />
        <PlatformLicenseDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ConfigurationOperationsCenter />
        <PlatformRegistryDashboard />
        <MaintenanceOperationsBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdministrativeLedgerCenter />
        <PlatformEvidenceDashboard />
      </div>
    </div>
  );
}
