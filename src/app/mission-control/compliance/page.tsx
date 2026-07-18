import React from 'react';
import { ComplianceOverview } from "@/components/mission-control/compliance/compliance-overview";
import { FrameworkRegistry } from "@/components/mission-control/compliance/framework-registry";
import { RegulationCenter } from "@/components/mission-control/compliance/regulation-center";
import { ComplianceRequirements } from "@/components/mission-control/compliance/compliance-requirements";
import { ControlLibrary } from "@/components/mission-control/compliance/control-library";
import { ControlTestingCenter } from "@/components/mission-control/compliance/control-testing-center";
import { AuditCenter } from "@/components/mission-control/compliance/audit-center";
import { AuditFindings } from "@/components/mission-control/compliance/audit-findings";
import { RemediationCenter } from "@/components/mission-control/compliance/remediation-center";
import { CertificationCenter } from "@/components/mission-control/compliance/certification-center";
import { ComplianceValidation } from "@/components/mission-control/compliance/compliance-validation";
import { ComplianceTimeline } from "@/components/mission-control/compliance/compliance-timeline";
import { ComplianceLedger } from "@/components/mission-control/compliance/compliance-ledger";
import { ComplianceSimulator } from "@/components/mission-control/compliance/compliance-simulator";
import { ExecutiveComplianceDashboard } from "@/components/mission-control/compliance/executive-compliance-dashboard";

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Compliance & Audit Operations Center</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing regulatory compliance and audits</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">STATUS: OPTIMAL</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveComplianceDashboard />
        <ComplianceOverview />
        <ComplianceValidation />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FrameworkRegistry />
        <RegulationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ComplianceRequirements />
        <ControlLibrary />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ControlTestingCenter />
        <AuditCenter />
        <CertificationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AuditFindings />
        <RemediationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ComplianceTimeline />
        <ComplianceLedger />
        <ComplianceSimulator />
      </div>
    </div>
  );
}
