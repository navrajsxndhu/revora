import React from 'react';
import { ExecutiveTaxOverview } from "@/components/mission-control/tax/executive-tax-overview";
import { TaxJurisdictionMatrix } from "@/components/mission-control/tax/tax-jurisdiction-matrix";
import { FilingCalendarDashboard } from "@/components/mission-control/tax/filing-calendar-dashboard";
import { TaxReturnCenter } from "@/components/mission-control/tax/tax-return-center";
import { RegulatorySubmissionDashboard } from "@/components/mission-control/tax/regulatory-submission-dashboard";
import { FiscalCalendarCenter } from "@/components/mission-control/tax/fiscal-calendar-center";
import { TaxLiabilityDashboard } from "@/components/mission-control/tax/tax-liability-dashboard";
import { StatutoryReportingCenter } from "@/components/mission-control/tax/statutory-reporting-center";
import { TransferPricingDashboard } from "@/components/mission-control/tax/transfer-pricing-dashboard";
import { TaxComplianceMatrix } from "@/components/mission-control/tax/tax-compliance-matrix";
import { TaxAuditCenter } from "@/components/mission-control/tax/tax-audit-center";
import { FiscalControlsDashboard } from "@/components/mission-control/tax/fiscal-controls-dashboard";
import { ConstitutionalTaxLedger } from "@/components/mission-control/tax/constitutional-tax-ledger";
import { TaxEvidenceCenter } from "@/components/mission-control/tax/tax-evidence-center";
import { ExecutiveFiscalCommandCenter } from "@/components/mission-control/tax/executive-fiscal-command-center";

export default function TaxGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Tax, Statutory Reporting & Fiscal Compliance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing taxation and statutory obligations</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">FISCAL GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveFiscalCommandCenter />
        <ExecutiveTaxOverview />
        <TaxJurisdictionMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FilingCalendarDashboard />
        <FiscalCalendarCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TaxReturnCenter />
        <RegulatorySubmissionDashboard />
        <TaxLiabilityDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatutoryReportingCenter />
        <TransferPricingDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TaxComplianceMatrix />
        <TaxAuditCenter />
        <FiscalControlsDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalTaxLedger />
        <TaxEvidenceCenter />
      </div>
    </div>
  );
}
