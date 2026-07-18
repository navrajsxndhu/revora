import React from 'react';
import { EnterpriseAnalyticsOverview } from "@/components/mission-control/analytics/enterprise-analytics-overview";
import { DashboardOperationsCenter } from "@/components/mission-control/analytics/dashboard-operations-center";
import { ExecutiveReportingDashboard } from "@/components/mission-control/analytics/executive-reporting-dashboard";
import { KPIRegistryDashboard } from "@/components/mission-control/analytics/k-p-i-registry-dashboard";
import { ScorecardOperationsCenter } from "@/components/mission-control/analytics/scorecard-operations-center";
import { SemanticModelCenter } from "@/components/mission-control/analytics/semantic-model-center";
import { DatasetGovernanceDashboard } from "@/components/mission-control/analytics/dataset-governance-dashboard";
import { AnalyticsLineageCenter } from "@/components/mission-control/analytics/analytics-lineage-center";
import { DashboardCertificationMatrix } from "@/components/mission-control/analytics/dashboard-certification-matrix";
import { AnalyticsComplianceDashboard } from "@/components/mission-control/analytics/analytics-compliance-dashboard";
import { AnalyticsValidationCenter } from "@/components/mission-control/analytics/analytics-validation-center";
import { ConstitutionalAnalyticsLedger } from "@/components/mission-control/analytics/constitutional-analytics-ledger";
import { AnalyticsAuditDashboard } from "@/components/mission-control/analytics/analytics-audit-dashboard";
import { AnalyticsHealthDashboard } from "@/components/mission-control/analytics/analytics-health-dashboard";
import { ExecutiveDecisionSupportDashboard } from "@/components/mission-control/analytics/executive-decision-support-dashboard";

export default function AnalyticsGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Analytics & BI Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing dashboards, metrics, semantics, and reporting assets</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">ANALYTICS GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveDecisionSupportDashboard />
        <EnterpriseAnalyticsOverview />
        <AnalyticsValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardOperationsCenter />
        <ExecutiveReportingDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <KPIRegistryDashboard />
        <ScorecardOperationsCenter />
        <DashboardCertificationMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SemanticModelCenter />
        <DatasetGovernanceDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnalyticsLineageCenter />
        <AnalyticsComplianceDashboard />
        <AnalyticsAuditDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalAnalyticsLedger />
        <AnalyticsHealthDashboard />
      </div>
    </div>
  );
}
