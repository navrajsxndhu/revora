import React from 'react';
import { EnterpriseFinancialOverview } from "@/components/mission-control/finance/enterprise-financial-overview";
import { BudgetRegistry } from "@/components/mission-control/finance/budget-registry";
import { BudgetAllocationCenter } from "@/components/mission-control/finance/budget-allocation-center";
import { CostCenterDashboard } from "@/components/mission-control/finance/cost-center-dashboard";
import { ProfitCenterDashboard } from "@/components/mission-control/finance/profit-center-dashboard";
import { CapitalExpenditureCenter } from "@/components/mission-control/finance/capital-expenditure-center";
import { OperationalExpenditureCenter } from "@/components/mission-control/finance/operational-expenditure-center";
import { FinancialCommitments } from "@/components/mission-control/finance/financial-commitments";
import { FinancialApprovalBoard } from "@/components/mission-control/finance/financial-approval-board";
import { ForecastCenter } from "@/components/mission-control/finance/forecast-center";
import { BudgetVarianceDashboard } from "@/components/mission-control/finance/budget-variance-dashboard";
import { FinancialControlCenter } from "@/components/mission-control/finance/financial-control-center";
import { FinancialValidationCenter } from "@/components/mission-control/finance/financial-validation-center";
import { ConstitutionalFinancialLedger } from "@/components/mission-control/finance/constitutional-financial-ledger";
import { ExecutiveFinancialDashboard } from "@/components/mission-control/finance/executive-financial-dashboard";

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Financial Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing enterprise finance</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">FISCAL STATUS: NOMINAL</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveFinancialDashboard />
        <EnterpriseFinancialOverview />
        <FinancialValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BudgetRegistry />
        <BudgetAllocationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CostCenterDashboard />
        <ProfitCenterDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CapitalExpenditureCenter />
        <OperationalExpenditureCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FinancialCommitments />
        <FinancialApprovalBoard />
        <ForecastCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BudgetVarianceDashboard />
        <FinancialControlCenter />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ConstitutionalFinancialLedger />
      </div>
    </div>
  );
}
