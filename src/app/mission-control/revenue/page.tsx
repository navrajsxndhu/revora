import React from 'react';
import { ExecutiveRevenueOverview } from "@/components/mission-control/revenue/executive-revenue-overview";
import { BillingOperationsCenter } from "@/components/mission-control/revenue/billing-operations-center";
import { InvoiceProcessingDashboard } from "@/components/mission-control/revenue/invoice-processing-dashboard";
import { RevenueRecognitionMatrix } from "@/components/mission-control/revenue/revenue-recognition-matrix";
import { AccountsReceivableCenter } from "@/components/mission-control/revenue/accounts-receivable-center";
import { SettlementOperationsDashboard } from "@/components/mission-control/revenue/settlement-operations-dashboard";
import { PaymentAllocationCenter } from "@/components/mission-control/revenue/payment-allocation-center";
import { CollectionsDashboard } from "@/components/mission-control/revenue/collections-dashboard";
import { BillingAdjustmentMatrix } from "@/components/mission-control/revenue/billing-adjustment-matrix";
import { RefundOperationsCenter } from "@/components/mission-control/revenue/refund-operations-center";
import { RevenueComplianceDashboard } from "@/components/mission-control/revenue/revenue-compliance-dashboard";
import { RevenueAuditCenter } from "@/components/mission-control/revenue/revenue-audit-center";
import { ConstitutionalRevenueLedger } from "@/components/mission-control/revenue/constitutional-revenue-ledger";
import { FinancialSettlementDashboard } from "@/components/mission-control/revenue/financial-settlement-dashboard";
import { ExecutiveRevenueCommandCenter } from "@/components/mission-control/revenue/executive-revenue-command-center";

export default function RevenueGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Billing, Revenue & Settlement Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing the quote-to-cash financial execution layer</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">REVENUE GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveRevenueCommandCenter />
        <ExecutiveRevenueOverview />
        <BillingOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InvoiceProcessingDashboard />
        <RevenueRecognitionMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AccountsReceivableCenter />
        <SettlementOperationsDashboard />
        <PaymentAllocationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CollectionsDashboard />
        <BillingAdjustmentMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RefundOperationsCenter />
        <RevenueComplianceDashboard />
        <FinancialSettlementDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueAuditCenter />
        <ConstitutionalRevenueLedger />
      </div>
    </div>
  );
}
