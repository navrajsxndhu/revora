import React from 'react';
import { EnterpriseContractRegistry } from "@/components/mission-control/contracts/enterprise-contract-registry";
import { ContractLifecycleDashboard } from "@/components/mission-control/contracts/contract-lifecycle-dashboard";
import { ContractApprovalCenter } from "@/components/mission-control/contracts/contract-approval-center";
import { ClauseLibraryDashboard } from "@/components/mission-control/contracts/clause-library-dashboard";
import { NegotiationOperationsCenter } from "@/components/mission-control/contracts/negotiation-operations-center";
import { ContractObligationMatrix } from "@/components/mission-control/contracts/contract-obligation-matrix";
import { RenewalOperationsDashboard } from "@/components/mission-control/contracts/renewal-operations-dashboard";
import { AmendmentCenter } from "@/components/mission-control/contracts/amendment-center";
import { TerminationGovernanceDashboard } from "@/components/mission-control/contracts/termination-governance-dashboard";
import { ContractComplianceCenter } from "@/components/mission-control/contracts/contract-compliance-center";
import { RepositoryOperationsDashboard } from "@/components/mission-control/contracts/repository-operations-dashboard";
import { ContractEvidenceLedger } from "@/components/mission-control/contracts/contract-evidence-ledger";
import { SignatureGovernanceCenter } from "@/components/mission-control/contracts/signature-governance-center";
import { ContractRiskMatrix } from "@/components/mission-control/contracts/contract-risk-matrix";
import { ExecutiveContractCommandCenter } from "@/components/mission-control/contracts/executive-contract-command-center";

export default function ContractsGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Contract Lifecycle & Obligation Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing commercial agreements, negotiations, clauses, and legal obligations</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">CONTRACT GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnterpriseContractRegistry />
        <ContractLifecycleDashboard />
        <ContractApprovalCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ClauseLibraryDashboard />
        <NegotiationOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ContractObligationMatrix />
        <RenewalOperationsDashboard />
        <AmendmentCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TerminationGovernanceDashboard />
        <ContractComplianceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RepositoryOperationsDashboard />
        <ContractEvidenceLedger />
        <SignatureGovernanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContractRiskMatrix />
        <ExecutiveContractCommandCenter />
      </div>
    </div>
  );
}
