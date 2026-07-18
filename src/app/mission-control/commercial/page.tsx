import React from 'react';
import { EnterpriseCommercialOverview } from "@/components/mission-control/commercial/enterprise-commercial-overview";
import { SalesOrganizationDashboard } from "@/components/mission-control/commercial/sales-organization-dashboard";
import { TerritoryOperationsCenter } from "@/components/mission-control/commercial/territory-operations-center";
import { AccountPlanningCenter } from "@/components/mission-control/commercial/account-planning-center";
import { CampaignOperationsDashboard } from "@/components/mission-control/commercial/campaign-operations-dashboard";
import { OpportunityPipelineBoard } from "@/components/mission-control/commercial/opportunity-pipeline-board";
import { DealDeskDashboard } from "@/components/mission-control/commercial/deal-desk-dashboard";
import { PricingGovernanceCenter } from "@/components/mission-control/commercial/pricing-governance-center";
import { DiscountApprovalMatrix } from "@/components/mission-control/commercial/discount-approval-matrix";
import { SalesForecastDashboard } from "@/components/mission-control/commercial/sales-forecast-dashboard";
import { PartnerOperationsCenter } from "@/components/mission-control/commercial/partner-operations-center";
import { CommercialValidationCenter } from "@/components/mission-control/commercial/commercial-validation-center";
import { ConstitutionalCommercialLedger } from "@/components/mission-control/commercial/constitutional-commercial-ledger";
import { CommercialHealthDashboard } from "@/components/mission-control/commercial/commercial-health-dashboard";
import { ExecutiveCommercialDashboard } from "@/components/mission-control/commercial/executive-commercial-dashboard";

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Sales, Go-To-Market & Commercial Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing commercial operations</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">COMMERCIAL: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveCommercialDashboard />
        <EnterpriseCommercialOverview />
        <CommercialValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesOrganizationDashboard />
        <TerritoryOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AccountPlanningCenter />
        <CampaignOperationsDashboard />
        <OpportunityPipelineBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DealDeskDashboard />
        <PricingGovernanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DiscountApprovalMatrix />
        <SalesForecastDashboard />
        <PartnerOperationsCenter />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <CommercialHealthDashboard />
        <ConstitutionalCommercialLedger />
      </div>
    </div>
  );
}
