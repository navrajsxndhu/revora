import React from 'react';
import { EnterpriseArchitectureOverview } from "@/components/mission-control/architecture/enterprise-architecture-overview";
import { ArchitectureDomains } from "@/components/mission-control/architecture/architecture-domains";
import { BusinessCapabilityMap } from "@/components/mission-control/architecture/business-capability-map";
import { TechnologyStandardsRegistry } from "@/components/mission-control/architecture/technology-standards-registry";
import { ApprovedTechnologies } from "@/components/mission-control/architecture/approved-technologies";
import { TechnologyLifecycleCenter } from "@/components/mission-control/architecture/technology-lifecycle-center";
import { ReferenceArchitectures } from "@/components/mission-control/architecture/reference-architectures";
import { ArchitectureReviewBoard } from "@/components/mission-control/architecture/architecture-review-board";
import { ArchitectureDecisionRecordsTimeline } from "@/components/mission-control/architecture/architecture-decision-records-timeline";
import { SolutionArchitectureCenter } from "@/components/mission-control/architecture/solution-architecture-center";
import { TechnicalDebtDashboard } from "@/components/mission-control/architecture/technical-debt-dashboard";
import { ModernizationPrograms } from "@/components/mission-control/architecture/modernization-programs";
import { ArchitectureValidationCenter } from "@/components/mission-control/architecture/architecture-validation-center";
import { ConstitutionalLedger } from "@/components/mission-control/architecture/constitutional-ledger";
import { ExecutiveArchitectureDashboard } from "@/components/mission-control/architecture/executive-architecture-dashboard";

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Architecture & Technology Standards</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing architecture and technology</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">STATUS: OPTIMAL</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveArchitectureDashboard />
        <EnterpriseArchitectureOverview />
        <ArchitectureValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ArchitectureDomains />
        <BusinessCapabilityMap />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TechnologyStandardsRegistry />
        <ApprovedTechnologies />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TechnologyLifecycleCenter />
        <ReferenceArchitectures />
        <SolutionArchitectureCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ArchitectureReviewBoard />
        <ArchitectureDecisionRecordsTimeline />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TechnicalDebtDashboard />
        <ModernizationPrograms />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ConstitutionalLedger />
      </div>
    </div>
  );
}
