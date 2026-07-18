import React from 'react';
import { EnterpriseProductOverview } from "@/components/mission-control/product-lifecycle/enterprise-product-overview";
import { ProductPortfolioDashboard } from "@/components/mission-control/product-lifecycle/product-portfolio-dashboard";
import { ProductFamilyRegistry } from "@/components/mission-control/product-lifecycle/product-family-registry";
import { ProductLifecycleCenter } from "@/components/mission-control/product-lifecycle/product-lifecycle-center";
import { RequirementsDashboard } from "@/components/mission-control/product-lifecycle/requirements-dashboard";
import { EngineeringChangeBoard } from "@/components/mission-control/product-lifecycle/engineering-change-board";
import { EngineeringReviewCenter } from "@/components/mission-control/product-lifecycle/engineering-review-center";
import { ProductConfigurationDashboard } from "@/components/mission-control/product-lifecycle/product-configuration-dashboard";
import { ProductReleaseCenter } from "@/components/mission-control/product-lifecycle/product-release-center";
import { ProductComplianceMatrix } from "@/components/mission-control/product-lifecycle/product-compliance-matrix";
import { InnovationPipelineDashboard } from "@/components/mission-control/product-lifecycle/innovation-pipeline-dashboard";
import { ProductValidationCenter } from "@/components/mission-control/product-lifecycle/product-validation-center";
import { ConstitutionalProductLedger } from "@/components/mission-control/product-lifecycle/constitutional-product-ledger";
import { ProductHealthDashboard } from "@/components/mission-control/product-lifecycle/product-health-dashboard";
import { ExecutiveProductLifecycleDashboard } from "@/components/mission-control/product-lifecycle/executive-product-lifecycle-dashboard";

export default function ProductLifecyclePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Product Lifecycle & Engineering Change Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing the complete product engineering lifecycle</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">PLM: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveProductLifecycleDashboard />
        <EnterpriseProductOverview />
        <ProductLifecycleCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductPortfolioDashboard />
        <ProductFamilyRegistry />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RequirementsDashboard />
        <EngineeringChangeBoard />
        <EngineeringReviewCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductConfigurationDashboard />
        <ProductReleaseCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <InnovationPipelineDashboard />
        <ProductValidationCenter />
        <ProductComplianceMatrix />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ProductHealthDashboard />
        <ConstitutionalProductLedger />
      </div>
    </div>
  );
}
