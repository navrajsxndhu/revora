import React from 'react';
import { EnterpriseInformationOverview } from "@/components/mission-control/information/enterprise-information-overview";
import { DocumentLibraryDashboard } from "@/components/mission-control/information/document-library-dashboard";
import { ControlledDocumentsCenter } from "@/components/mission-control/information/controlled-documents-center";
import { DocumentApprovalDashboard } from "@/components/mission-control/information/document-approval-dashboard";
import { VersionControlCenter } from "@/components/mission-control/information/version-control-center";
import { RecordsGovernanceDashboard } from "@/components/mission-control/information/records-governance-dashboard";
import { RecordsRetentionCenter } from "@/components/mission-control/information/records-retention-center";
import { ArchiveOperationsDashboard } from "@/components/mission-control/information/archive-operations-dashboard";
import { LegalHoldCenter } from "@/components/mission-control/information/legal-hold-center";
import { InformationClassificationMatrix } from "@/components/mission-control/information/information-classification-matrix";
import { InformationComplianceDashboard } from "@/components/mission-control/information/information-compliance-dashboard";
import { InformationValidationCenter } from "@/components/mission-control/information/information-validation-center";
import { ConstitutionalInformationLedger } from "@/components/mission-control/information/constitutional-information-ledger";
import { InformationHealthDashboard } from "@/components/mission-control/information/information-health-dashboard";
import { ExecutiveInformationDashboard } from "@/components/mission-control/information/executive-information-dashboard";

export default function InformationPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Document, Records & Information Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing enterprise information lifecycles</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">INFORMATION: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveInformationDashboard />
        <EnterpriseInformationOverview />
        <InformationValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DocumentLibraryDashboard />
        <ControlledDocumentsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DocumentApprovalDashboard />
        <VersionControlCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecordsGovernanceDashboard />
        <RecordsRetentionCenter />
        <ArchiveOperationsDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LegalHoldCenter />
        <InformationClassificationMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InformationComplianceDashboard />
        <InformationHealthDashboard />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ConstitutionalInformationLedger />
      </div>
    </div>
  );
}
