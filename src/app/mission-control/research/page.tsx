import React from 'react';
import { ExecutiveResearchOverview } from "@/components/mission-control/research/executive-research-overview";
import { ResearchPortfolioCenter } from "@/components/mission-control/research/research-portfolio-center";
import { LaboratoryOperationsDashboard } from "@/components/mission-control/research/laboratory-operations-dashboard";
import { ExperimentGovernanceMatrix } from "@/components/mission-control/research/experiment-governance-matrix";
import { ResearchEvidenceCenter } from "@/components/mission-control/research/research-evidence-center";
import { PrototypeLifecycleDashboard } from "@/components/mission-control/research/prototype-lifecycle-dashboard";
import { PatentPortfolioCenter } from "@/components/mission-control/research/patent-portfolio-center";
import { InnovationPipelineDashboard } from "@/components/mission-control/research/innovation-pipeline-dashboard";
import { PublicationGovernanceCenter } from "@/components/mission-control/research/publication-governance-center";
import { TechnologyTransferMatrix } from "@/components/mission-control/research/technology-transfer-matrix";
import { LaboratoryAssetDashboard } from "@/components/mission-control/research/laboratory-asset-dashboard";
import { ResearchFundingDashboard } from "@/components/mission-control/research/research-funding-dashboard";
import { ResearchComplianceCenter } from "@/components/mission-control/research/research-compliance-center";
import { ConstitutionalResearchLedger } from "@/components/mission-control/research/constitutional-research-ledger";
import { ExecutiveResearchCommandCenter } from "@/components/mission-control/research/executive-research-command-center";

export default function ResearchGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Research, Development & Laboratory</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing R&D and scientific execution</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">R&D GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveResearchCommandCenter />
        <ExecutiveResearchOverview />
        <ResearchFundingDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResearchPortfolioCenter />
        <LaboratoryOperationsDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ExperimentGovernanceMatrix />
        <ResearchEvidenceCenter />
        <PrototypeLifecycleDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PatentPortfolioCenter />
        <InnovationPipelineDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PublicationGovernanceCenter />
        <TechnologyTransferMatrix />
        <LaboratoryAssetDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResearchComplianceCenter />
        <ConstitutionalResearchLedger />
      </div>
    </div>
  );
}
