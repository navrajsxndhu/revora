import React from 'react';
import { KnowledgeRepositoryCenter } from "@/components/mission-control/knowledge/knowledge-repository-center";
import { EnterprisePolicyDashboard } from "@/components/mission-control/knowledge/enterprise-policy-dashboard";
import { StandardsGovernanceCenter } from "@/components/mission-control/knowledge/standards-governance-center";
import { SOPManagementBoard } from "@/components/mission-control/knowledge/s-o-p-management-board";
import { TechnicalGuidelinesDashboard } from "@/components/mission-control/knowledge/technical-guidelines-dashboard";
import { EngineeringHandbookCenter } from "@/components/mission-control/knowledge/engineering-handbook-center";
import { OperationsPlaybookCenter } from "@/components/mission-control/knowledge/operations-playbook-center";
import { KnowledgeApprovalMatrix } from "@/components/mission-control/knowledge/knowledge-approval-matrix";
import { KnowledgeVersionCenter } from "@/components/mission-control/knowledge/knowledge-version-center";
import { InstitutionalMemoryDashboard } from "@/components/mission-control/knowledge/institutional-memory-dashboard";
import { KnowledgeEvidenceLedger } from "@/components/mission-control/knowledge/knowledge-evidence-ledger";
import { DocumentationGovernanceCenter } from "@/components/mission-control/knowledge/documentation-governance-center";
import { KnowledgeRetentionBoard } from "@/components/mission-control/knowledge/knowledge-retention-board";
import { IntellectualCapitalCenter } from "@/components/mission-control/knowledge/intellectual-capital-center";
import { ConstitutionalKnowledgeDashboard } from "@/components/mission-control/knowledge/constitutional-knowledge-dashboard";

export default function KnowledgeGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Knowledge & Policy Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing policies, standards, and intellectual capital</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">KNOWLEDGE GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KnowledgeRepositoryCenter />
        <EnterprisePolicyDashboard />
        <StandardsGovernanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SOPManagementBoard />
        <TechnicalGuidelinesDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <EngineeringHandbookCenter />
        <OperationsPlaybookCenter />
        <KnowledgeApprovalMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <KnowledgeVersionCenter />
        <InstitutionalMemoryDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DocumentationGovernanceCenter />
        <KnowledgeRetentionBoard />
        <KnowledgeEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IntellectualCapitalCenter />
        <ConstitutionalKnowledgeDashboard />
      </div>
    </div>
  );
}
