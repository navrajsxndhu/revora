import React from 'react';
import { EnterpriseReportCatalog } from "@/components/mission-control/reporting/enterprise-report-catalog";
import { ReportExecutionCenter } from "@/components/mission-control/reporting/report-execution-center";
import { ReportPublicationDashboard } from "@/components/mission-control/reporting/report-publication-dashboard";
import { ReportDistributionCenter } from "@/components/mission-control/reporting/report-distribution-center";
import { ScheduledReportsBoard } from "@/components/mission-control/reporting/scheduled-reports-board";
import { ReportApprovalMatrix } from "@/components/mission-control/reporting/report-approval-matrix";
import { ReportCertificationDashboard } from "@/components/mission-control/reporting/report-certification-dashboard";
import { ReportRetentionCenter } from "@/components/mission-control/reporting/report-retention-center";
import { ReportArchiveDashboard } from "@/components/mission-control/reporting/report-archive-dashboard";
import { ReportComplianceBoard } from "@/components/mission-control/reporting/report-compliance-board";
import { ReportEvidenceLedger } from "@/components/mission-control/reporting/report-evidence-ledger";
import { ReportAuditDashboard } from "@/components/mission-control/reporting/report-audit-dashboard";
import { ReportParameterCenter } from "@/components/mission-control/reporting/report-parameter-center";
import { ReportExecutionTimeline } from "@/components/mission-control/reporting/report-execution-timeline";
import { ConstitutionalReportingOverview } from "@/components/mission-control/reporting/constitutional-reporting-overview";

export default function ReportingGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Reporting & Publication Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing report executions, publication schedules, and compliance ledgers</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">REPORTING GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConstitutionalReportingOverview />
        <EnterpriseReportCatalog />
        <ScheduledReportsBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReportExecutionCenter />
        <ReportPublicationDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ReportDistributionCenter />
        <ReportApprovalMatrix />
        <ReportCertificationDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReportParameterCenter />
        <ReportExecutionTimeline />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ReportComplianceBoard />
        <ReportAuditDashboard />
        <ReportEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReportRetentionCenter />
        <ReportArchiveDashboard />
      </div>
    </div>
  );
}
