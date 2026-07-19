import React from 'react';
import { EnterpriseCapabilityMap } from "@/components/mission-control/architecture/enterprise-capability-map";
import { ApplicationPortfolioCenter } from "@/components/mission-control/architecture/application-portfolio-center";
import { TechnologyStandardsDashboard } from "@/components/mission-control/architecture/technology-standards-dashboard";
import { TechnologyLifecycleCenter } from "@/components/mission-control/architecture/technology-lifecycle-center";
import { ArchitectureReviewBoard } from "@/components/mission-control/architecture/architecture-review-board";
import { ArchitectureComplianceMatrix } from "@/components/mission-control/architecture/architecture-compliance-matrix";
import { ReferenceArchitectureCenter } from "@/components/mission-control/architecture/reference-architecture-center";
import { SolutionArchitectureDashboard } from "@/components/mission-control/architecture/solution-architecture-dashboard";
import { BusinessCapabilityMatrix } from "@/components/mission-control/architecture/business-capability-matrix";
import { IntegrationLandscapeBoard } from "@/components/mission-control/architecture/integration-landscape-board";
import { DependencyVisualizationCenter } from "@/components/mission-control/architecture/dependency-visualization-center";
import { TechnologyRoadmapDashboard } from "@/components/mission-control/architecture/technology-roadmap-dashboard";
import { ArchitectureEvidenceLedger } from "@/components/mission-control/architecture/architecture-evidence-ledger";
import { GovernanceOperationsCenter } from "@/components/mission-control/architecture/governance-operations-center";
import { ConstitutionalArchitectureDashboard } from "@/components/mission-control/architecture/constitutional-architecture-dashboard";

export default function ArchitectureGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Architecture Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing capability models and technology standards</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">ARCHITECTURE GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnterpriseCapabilityMap />
        <ApplicationPortfolioCenter />
        <TechnologyStandardsDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TechnologyLifecycleCenter />
        <ArchitectureReviewBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ArchitectureComplianceMatrix />
        <ReferenceArchitectureCenter />
        <SolutionArchitectureDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BusinessCapabilityMatrix />
        <IntegrationLandscapeBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DependencyVisualizationCenter />
        <TechnologyRoadmapDashboard />
        <ArchitectureEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GovernanceOperationsCenter />
        <ConstitutionalArchitectureDashboard />
      </div>
    </div>
  );
}
