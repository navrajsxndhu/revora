import React from 'react';
import { EnterpriseQualityOverview } from "@/components/mission-control/quality/enterprise-quality-overview";
import { QualityPolicyCenter } from "@/components/mission-control/quality/quality-policy-center";
import { InspectionOperationsCenter } from "@/components/mission-control/quality/inspection-operations-center";
import { InspectionPlanDashboard } from "@/components/mission-control/quality/inspection-plan-dashboard";
import { TestingAndValidationCenter } from "@/components/mission-control/quality/testing-and-validation-center";
import { NonconformanceDashboard } from "@/components/mission-control/quality/nonconformance-dashboard";
import { CAPAManagementCenter } from "@/components/mission-control/quality/c-a-p-a-management-center";
import { RootCauseAnalysisDashboard } from "@/components/mission-control/quality/root-cause-analysis-dashboard";
import { SupplierQualityCenter } from "@/components/mission-control/quality/supplier-quality-center";
import { ProductQualityDashboard } from "@/components/mission-control/quality/product-quality-dashboard";
import { ProcessQualityDashboard } from "@/components/mission-control/quality/process-quality-dashboard";
import { ContinuousImprovementCenter } from "@/components/mission-control/quality/continuous-improvement-center";
import { ConstitutionalQualityLedger } from "@/components/mission-control/quality/constitutional-quality-ledger";
import { QualityHealthDashboard } from "@/components/mission-control/quality/quality-health-dashboard";
import { ExecutiveQualityDashboard } from "@/components/mission-control/quality/executive-quality-dashboard";

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Quality Management, Inspection & Continuous Improvement</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing quality and continuous improvement</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">QUALITY: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveQualityDashboard />
        <EnterpriseQualityOverview />
        <QualityPolicyCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InspectionOperationsCenter />
        <InspectionPlanDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TestingAndValidationCenter />
        <NonconformanceDashboard />
        <CAPAManagementCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RootCauseAnalysisDashboard />
        <SupplierQualityCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProductQualityDashboard />
        <ProcessQualityDashboard />
        <ContinuousImprovementCenter />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <QualityHealthDashboard />
        <ConstitutionalQualityLedger />
      </div>
    </div>
  );
}
