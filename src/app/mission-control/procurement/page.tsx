import React from 'react';
import { EnterpriseProcurementOverview } from "@/components/mission-control/procurement/enterprise-procurement-overview";
import { ProcurementPolicyCenter } from "@/components/mission-control/procurement/procurement-policy-center";
import { StrategicSourcingDashboard } from "@/components/mission-control/procurement/strategic-sourcing-dashboard";
import { ProcurementRequestCenter } from "@/components/mission-control/procurement/procurement-request-center";
import { PurchaseRequisitionBoard } from "@/components/mission-control/procurement/purchase-requisition-board";
import { PurchaseOrderDashboard } from "@/components/mission-control/procurement/purchase-order-dashboard";
import { VendorSelectionMatrix } from "@/components/mission-control/procurement/vendor-selection-matrix";
import { BidEvaluationCenter } from "@/components/mission-control/procurement/bid-evaluation-center";
import { ProcurementApprovalBoard } from "@/components/mission-control/procurement/procurement-approval-board";
import { GoodsReceiptCenter } from "@/components/mission-control/procurement/goods-receipt-center";
import { ProcurementComplianceDashboard } from "@/components/mission-control/procurement/procurement-compliance-dashboard";
import { ProcurementValidationCenter } from "@/components/mission-control/procurement/procurement-validation-center";
import { ConstitutionalProcurementLedger } from "@/components/mission-control/procurement/constitutional-procurement-ledger";
import { ProcurementHealthDashboard } from "@/components/mission-control/procurement/procurement-health-dashboard";
import { ExecutiveProcurementDashboard } from "@/components/mission-control/procurement/executive-procurement-dashboard";

export default function ProcurementPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Procurement & Purchasing Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing procurement execution lifecycle</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">PROCUREMENT: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveProcurementDashboard />
        <EnterpriseProcurementOverview />
        <ProcurementValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProcurementPolicyCenter />
        <StrategicSourcingDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProcurementRequestCenter />
        <PurchaseRequisitionBoard />
        <PurchaseOrderDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VendorSelectionMatrix />
        <BidEvaluationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProcurementApprovalBoard />
        <GoodsReceiptCenter />
        <ProcurementComplianceDashboard />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ProcurementHealthDashboard />
        <ConstitutionalProcurementLedger />
      </div>
    </div>
  );
}
