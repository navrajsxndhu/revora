import React from 'react';
import { EnterpriseLegalOverview } from "@/components/mission-control/legal/enterprise-legal-overview";
import { LegalEntityRegistry } from "@/components/mission-control/legal/legal-entity-registry";
import { CorporateGovernanceDashboard } from "@/components/mission-control/legal/corporate-governance-dashboard";
import { BoardResolutionCenter } from "@/components/mission-control/legal/board-resolution-center";
import { ContractOperationsDashboard } from "@/components/mission-control/legal/contract-operations-dashboard";
import { ContractObligationMatrix } from "@/components/mission-control/legal/contract-obligation-matrix";
import { ClauseGovernanceCenter } from "@/components/mission-control/legal/clause-governance-center";
import { LitigationOperationsCenter } from "@/components/mission-control/legal/litigation-operations-center";
import { IntellectualPropertyDashboard } from "@/components/mission-control/legal/intellectual-property-dashboard";
import { PolicyAcknowledgementCenter } from "@/components/mission-control/legal/policy-acknowledgement-center";
import { LegalComplianceMatrix } from "@/components/mission-control/legal/legal-compliance-matrix";
import { LegalValidationCenter } from "@/components/mission-control/legal/legal-validation-center";
import { ConstitutionalLegalLedger } from "@/components/mission-control/legal/constitutional-legal-ledger";
import { LegalHealthDashboard } from "@/components/mission-control/legal/legal-health-dashboard";
import { ExecutiveLegalDashboard } from "@/components/mission-control/legal/executive-legal-dashboard";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Legal, Contract Lifecycle & Corporate Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing enterprise legal operations</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">LEGAL: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveLegalDashboard />
        <EnterpriseLegalOverview />
        <LegalValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <LegalEntityRegistry />
        <CorporateGovernanceDashboard />
        <BoardResolutionCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ContractOperationsDashboard />
        <ContractObligationMatrix />
        <ClauseGovernanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LitigationOperationsCenter />
        <IntellectualPropertyDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PolicyAcknowledgementCenter />
        <LegalComplianceMatrix />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <LegalHealthDashboard />
        <ConstitutionalLegalLedger />
      </div>
    </div>
  );
}
