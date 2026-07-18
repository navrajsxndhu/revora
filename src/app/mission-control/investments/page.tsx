import React from 'react';
import { EnterprisePortfolioOverview } from "@/components/mission-control/investments/enterprise-portfolio-overview";
import { InvestmentPortfolioDashboard } from "@/components/mission-control/investments/investment-portfolio-dashboard";
import { StrategicInitiativeCenter } from "@/components/mission-control/investments/strategic-initiative-center";
import { BusinessCaseDashboard } from "@/components/mission-control/investments/business-case-dashboard";
import { CapitalAllocationMatrix } from "@/components/mission-control/investments/capital-allocation-matrix";
import { FundingOperationsCenter } from "@/components/mission-control/investments/funding-operations-center";
import { BenefitRealizationDashboard } from "@/components/mission-control/investments/benefit-realization-dashboard";
import { PortfolioRoadmapCenter } from "@/components/mission-control/investments/portfolio-roadmap-center";
import { ExecutiveReviewDashboard } from "@/components/mission-control/investments/executive-review-dashboard";
import { PortfolioGovernanceBoard } from "@/components/mission-control/investments/portfolio-governance-board";
import { InvestmentComplianceMatrix } from "@/components/mission-control/investments/investment-compliance-matrix";
import { InvestmentValidationCenter } from "@/components/mission-control/investments/investment-validation-center";
import { ConstitutionalInvestmentLedger } from "@/components/mission-control/investments/constitutional-investment-ledger";
import { PortfolioHealthDashboard } from "@/components/mission-control/investments/portfolio-health-dashboard";
import { ExecutiveCapitalPlanningDashboard } from "@/components/mission-control/investments/executive-capital-planning-dashboard";

export default function PortfolioGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Portfolio & Capital Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing investments, business cases, and portfolio allocation</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">CAPITAL GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveCapitalPlanningDashboard />
        <EnterprisePortfolioOverview />
        <InvestmentValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InvestmentPortfolioDashboard />
        <StrategicInitiativeCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BusinessCaseDashboard />
        <CapitalAllocationMatrix />
        <FundingOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BenefitRealizationDashboard />
        <PortfolioRoadmapCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ExecutiveReviewDashboard />
        <PortfolioGovernanceBoard />
        <InvestmentComplianceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalInvestmentLedger />
        <PortfolioHealthDashboard />
      </div>
    </div>
  );
}
