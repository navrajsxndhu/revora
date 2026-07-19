import React from 'react';
import { EnterpriseLicenseCenter } from "@/components/mission-control/licensing/enterprise-license-center";
import { LicenseActivationDashboard } from "@/components/mission-control/licensing/license-activation-dashboard";
import { SubscriptionOperationsCenter } from "@/components/mission-control/licensing/subscription-operations-center";
import { EntitlementMatrix } from "@/components/mission-control/licensing/entitlement-matrix";
import { FeatureAccessDashboard } from "@/components/mission-control/licensing/feature-access-dashboard";
import { SeatAllocationCenter } from "@/components/mission-control/licensing/seat-allocation-center";
import { UsageMeterDashboard } from "@/components/mission-control/licensing/usage-meter-dashboard";
import { LicenseQuotaCenter } from "@/components/mission-control/licensing/license-quota-center";
import { RenewalOperationsDashboard } from "@/components/mission-control/licensing/renewal-operations-dashboard";
import { CommercialEntitlementCenter } from "@/components/mission-control/licensing/commercial-entitlement-center";
import { ComplianceMonitoringDashboard } from "@/components/mission-control/licensing/compliance-monitoring-dashboard";
import { LicenseAuditCenter } from "@/components/mission-control/licensing/license-audit-center";
import { LicenseEvidenceLedger } from "@/components/mission-control/licensing/license-evidence-ledger";
import { ProductEditionDashboard } from "@/components/mission-control/licensing/product-edition-dashboard";
import { EnterpriseLicensingOverview } from "@/components/mission-control/licensing/enterprise-licensing-overview";

export default function LicensingGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Licensing & Subscription Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing entitlements, subscriptions, seat allocation, and feature access</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">LICENSING GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnterpriseLicenseCenter />
        <LicenseActivationDashboard />
        <SubscriptionOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EntitlementMatrix />
        <FeatureAccessDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SeatAllocationCenter />
        <UsageMeterDashboard />
        <LicenseQuotaCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RenewalOperationsDashboard />
        <CommercialEntitlementCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ComplianceMonitoringDashboard />
        <LicenseAuditCenter />
        <LicenseEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductEditionDashboard />
        <EnterpriseLicensingOverview />
      </div>
    </div>
  );
}
