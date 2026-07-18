import React from 'react';
import { TreasuryExecutiveOverview } from "@/components/mission-control/treasury/treasury-executive-overview";
import { CashPositionDashboard } from "@/components/mission-control/treasury/cash-position-dashboard";
import { LiquidityOperationsCenter } from "@/components/mission-control/treasury/liquidity-operations-center";
import { BankAccountRegistry } from "@/components/mission-control/treasury/bank-account-registry";
import { PaymentGovernanceCenter } from "@/components/mission-control/treasury/payment-governance-center";
import { TreasuryComplianceMatrix } from "@/components/mission-control/treasury/treasury-compliance-matrix";
import { FXExposureDashboard } from "@/components/mission-control/treasury/fx-exposure-dashboard";
import { DebtPortfolioDashboard } from "@/components/mission-control/treasury/debt-portfolio-dashboard";
import { InvestmentGovernanceCenter } from "@/components/mission-control/treasury/investment-governance-center";
import { LetterOfCreditDashboard } from "@/components/mission-control/treasury/letter-of-credit-dashboard";
import { BankGuaranteeCenter } from "@/components/mission-control/treasury/bank-guarantee-center";
import { TreasuryRiskMatrix } from "@/components/mission-control/treasury/treasury-risk-matrix";
import { TreasuryLedger } from "@/components/mission-control/treasury/treasury-ledger";
import { TreasuryAuditCenter } from "@/components/mission-control/treasury/treasury-audit-center";
import { ExecutiveTreasuryCommandCenter } from "@/components/mission-control/treasury/executive-treasury-command-center";

export default function TreasuryGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Treasury & Capital Markets</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing cash, liquidity, debt, and investments</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">TREASURY GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveTreasuryCommandCenter />
        <TreasuryExecutiveOverview />
        <TreasuryRiskMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CashPositionDashboard />
        <LiquidityOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BankAccountRegistry />
        <PaymentGovernanceCenter />
        <FXExposureDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DebtPortfolioDashboard />
        <InvestmentGovernanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <LetterOfCreditDashboard />
        <BankGuaranteeCenter />
        <TreasuryComplianceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TreasuryLedger />
        <TreasuryAuditCenter />
      </div>
    </div>
  );
}
