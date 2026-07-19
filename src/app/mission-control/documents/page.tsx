import React from 'react';
import { EnterpriseDocumentRegistry } from "@/components/mission-control/documents/enterprise-document-registry";
import { DocumentRepositoryDashboard } from "@/components/mission-control/documents/document-repository-dashboard";
import { DocumentLifecycleCenter } from "@/components/mission-control/documents/document-lifecycle-center";
import { VersionControlDashboard } from "@/components/mission-control/documents/version-control-dashboard";
import { ClassificationOperationsCenter } from "@/components/mission-control/documents/classification-operations-center";
import { ApprovalWorkflowCenter } from "@/components/mission-control/documents/approval-workflow-center";
import { PublicationOperationsDashboard } from "@/components/mission-control/documents/publication-operations-dashboard";
import { DistributionGovernanceBoard } from "@/components/mission-control/documents/distribution-governance-board";
import { RecordsManagementCenter } from "@/components/mission-control/documents/records-management-center";
import { RetentionOperationsDashboard } from "@/components/mission-control/documents/retention-operations-dashboard";
import { ArchiveGovernanceCenter } from "@/components/mission-control/documents/archive-governance-center";
import { MetadataOperationsCenter } from "@/components/mission-control/documents/metadata-operations-center";
import { DocumentEvidenceLedger } from "@/components/mission-control/documents/document-evidence-ledger";
import { DocumentAuditDashboard } from "@/components/mission-control/documents/document-audit-dashboard";
import { ExecutiveDocumentCommandCenter } from "@/components/mission-control/documents/executive-document-command-center";

export default function DocumentsGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Document, Content & Records Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing document versions, classifications, and official records</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">DOCUMENT GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnterpriseDocumentRegistry />
        <DocumentRepositoryDashboard />
        <DocumentLifecycleCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VersionControlDashboard />
        <ClassificationOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ApprovalWorkflowCenter />
        <PublicationOperationsDashboard />
        <DistributionGovernanceBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecordsManagementCenter />
        <RetentionOperationsDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ArchiveGovernanceCenter />
        <MetadataOperationsCenter />
        <DocumentEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DocumentAuditDashboard />
        <ExecutiveDocumentCommandCenter />
      </div>
    </div>
  );
}
