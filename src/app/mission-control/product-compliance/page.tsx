import React from 'react';
import { ExecutiveProductComplianceOverview } from "@/components/mission-control/product-compliance/executive-product-compliance-overview";
import { ProductSafetyCenter } from "@/components/mission-control/product-compliance/product-safety-center";
import { HazardRegisterDashboard } from "@/components/mission-control/product-compliance/hazard-register-dashboard";
import { CertificationAuthorityMatrix } from "@/components/mission-control/product-compliance/certification-authority-matrix";
import { RegulatoryFrameworkDashboard } from "@/components/mission-control/product-compliance/regulatory-framework-dashboard";
import { ConformityAssessmentCenter } from "@/components/mission-control/product-compliance/conformity-assessment-center";
import { ComplianceEvidenceMatrix } from "@/components/mission-control/product-compliance/compliance-evidence-matrix";
import { ProductLabelingCenter } from "@/components/mission-control/product-compliance/product-labeling-center";
import { ProductRecallOperations } from "@/components/mission-control/product-compliance/product-recall-operations";
import { PostMarketSurveillanceDashboard } from "@/components/mission-control/product-compliance/post-market-surveillance-dashboard";
import { RegulatoryInspectionCenter } from "@/components/mission-control/product-compliance/regulatory-inspection-center";
import { ComplianceDeviationDashboard } from "@/components/mission-control/product-compliance/compliance-deviation-dashboard";
import { ConstitutionalComplianceLedger } from "@/components/mission-control/product-compliance/constitutional-compliance-ledger";
import { CertificationStatusDashboard } from "@/components/mission-control/product-compliance/certification-status-dashboard";
import { ExecutiveProductComplianceCommandCenter } from "@/components/mission-control/product-compliance/executive-product-compliance-command-center";

export default function ProductComplianceGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Product Safety & Compliance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing regulatory conformity and product safety</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">REGULATORY GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveProductComplianceCommandCenter />
        <ExecutiveProductComplianceOverview />
        <ProductSafetyCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HazardRegisterDashboard />
        <RegulatoryFrameworkDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CertificationAuthorityMatrix />
        <CertificationStatusDashboard />
        <ConformityAssessmentCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductLabelingCenter />
        <ComplianceEvidenceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProductRecallOperations />
        <PostMarketSurveillanceDashboard />
        <RegulatoryInspectionCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ComplianceDeviationDashboard />
        <ConstitutionalComplianceLedger />
      </div>
    </div>
  );
}
