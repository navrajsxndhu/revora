import React from 'react';
import { EnterpriseCustomerOverview } from "@/components/mission-control/customer/enterprise-customer-overview";
import { CustomerRegistry } from "@/components/mission-control/customer/customer-registry";
import { CustomerHierarchyDashboard } from "@/components/mission-control/customer/customer-hierarchy-dashboard";
import { SalesPipelineCenter } from "@/components/mission-control/customer/sales-pipeline-center";
import { OpportunityManagementDashboard } from "@/components/mission-control/customer/opportunity-management-dashboard";
import { QuotationCenter } from "@/components/mission-control/customer/quotation-center";
import { ContractGovernanceDashboard } from "@/components/mission-control/customer/contract-governance-dashboard";
import { SubscriptionOperationsCenter } from "@/components/mission-control/customer/subscription-operations-center";
import { CustomerSuccessDashboard } from "@/components/mission-control/customer/customer-success-dashboard";
import { RenewalCenter } from "@/components/mission-control/customer/renewal-center";
import { RevenueOperationsDashboard } from "@/components/mission-control/customer/revenue-operations-dashboard";
import { CustomerValidationCenter } from "@/components/mission-control/customer/customer-validation-center";
import { ConstitutionalCustomerLedger } from "@/components/mission-control/customer/constitutional-customer-ledger";
import { CustomerHealthDashboard } from "@/components/mission-control/customer/customer-health-dashboard";
import { ExecutiveCustomerDashboard } from "@/components/mission-control/customer/executive-customer-dashboard";

export default function CustomerPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Customer, CRM & Revenue Operations Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing the complete customer lifecycle</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">CUSTOMER: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveCustomerDashboard />
        <EnterpriseCustomerOverview />
        <CustomerValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomerRegistry />
        <CustomerHierarchyDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SalesPipelineCenter />
        <OpportunityManagementDashboard />
        <QuotationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContractGovernanceDashboard />
        <SubscriptionOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CustomerSuccessDashboard />
        <RenewalCenter />
        <RevenueOperationsDashboard />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <CustomerHealthDashboard />
        <ConstitutionalCustomerLedger />
      </div>
    </div>
  );
}
