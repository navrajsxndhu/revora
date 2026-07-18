import React from 'react';
import { EnterprisePrivacyOverview } from "@/components/mission-control/privacy/enterprise-privacy-overview";
import { PrivacyPolicyCenter } from "@/components/mission-control/privacy/privacy-policy-center";
import { ConsentManagementDashboard } from "@/components/mission-control/privacy/consent-management-dashboard";
import { ProcessingActivityCenter } from "@/components/mission-control/privacy/processing-activity-center";
import { DataControllerDashboard } from "@/components/mission-control/privacy/data-controller-dashboard";
import { DataProcessorDashboard } from "@/components/mission-control/privacy/data-processor-dashboard";
import { CrossBorderTransferCenter } from "@/components/mission-control/privacy/cross-border-transfer-center";
import { DataSubjectRightsCenter } from "@/components/mission-control/privacy/data-subject-rights-center";
import { PrivacyAssessmentDashboard } from "@/components/mission-control/privacy/privacy-assessment-dashboard";
import { PrivacyIncidentCenter } from "@/components/mission-control/privacy/privacy-incident-center";
import { PrivacyComplianceMatrix } from "@/components/mission-control/privacy/privacy-compliance-matrix";
import { PrivacyValidationCenter } from "@/components/mission-control/privacy/privacy-validation-center";
import { ConstitutionalPrivacyLedger } from "@/components/mission-control/privacy/constitutional-privacy-ledger";
import { PrivacyHealthDashboard } from "@/components/mission-control/privacy/privacy-health-dashboard";
import { ExecutivePrivacyDashboard } from "@/components/mission-control/privacy/executive-privacy-dashboard";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Privacy, Data Protection & Consent Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing personal data and privacy operations</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">PRIVACY: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutivePrivacyDashboard />
        <EnterprisePrivacyOverview />
        <PrivacyValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PrivacyPolicyCenter />
        <ConsentManagementDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProcessingActivityCenter />
        <DataSubjectRightsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DataControllerDashboard />
        <DataProcessorDashboard />
        <CrossBorderTransferCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PrivacyAssessmentDashboard />
        <PrivacyIncidentCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PrivacyComplianceMatrix />
        <PrivacyHealthDashboard />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ConstitutionalPrivacyLedger />
      </div>
    </div>
  );
}
