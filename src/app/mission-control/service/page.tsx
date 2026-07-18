import React from 'react';
import { EnterpriseServiceOverview } from "@/components/mission-control/service/enterprise-service-overview";
import { ServiceCatalogDashboard } from "@/components/mission-control/service/service-catalog-dashboard";
import { CustomerCaseOperationsCenter } from "@/components/mission-control/service/customer-case-operations-center";
import { ServiceRequestDashboard } from "@/components/mission-control/service/service-request-dashboard";
import { CustomerSuccessCenter } from "@/components/mission-control/service/customer-success-center";
import { RenewalOperationsDashboard } from "@/components/mission-control/service/renewal-operations-dashboard";
import { EscalationManagementCenter } from "@/components/mission-control/service/escalation-management-center";
import { CustomerEntitlementMatrix } from "@/components/mission-control/service/customer-entitlement-matrix";
import { SupportQueueDashboard } from "@/components/mission-control/service/support-queue-dashboard";
import { ServiceGovernanceBoard } from "@/components/mission-control/service/service-governance-board";
import { ServiceComplianceMatrix } from "@/components/mission-control/service/service-compliance-matrix";
import { ServiceValidationCenter } from "@/components/mission-control/service/service-validation-center";
import { ConstitutionalServiceLedger } from "@/components/mission-control/service/constitutional-service-ledger";
import { ServiceHealthDashboard } from "@/components/mission-control/service/service-health-dashboard";
import { ExecutiveCustomerServiceDashboard } from "@/components/mission-control/service/executive-customer-service-dashboard";

export default function ServiceLifecyclePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Service Lifecycle & Customer Success</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing service delivery and case operations</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">SERVICE GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveCustomerServiceDashboard />
        <EnterpriseServiceOverview />
        <ServiceValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ServiceCatalogDashboard />
        <CustomerCaseOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ServiceRequestDashboard />
        <CustomerSuccessCenter />
        <RenewalOperationsDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EscalationManagementCenter />
        <CustomerEntitlementMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SupportQueueDashboard />
        <ServiceGovernanceBoard />
        <ServiceComplianceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalServiceLedger />
        <ServiceHealthDashboard />
      </div>
    </div>
  );
}
