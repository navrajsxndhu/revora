import React from 'react';
import { DataPipelineOperationsCenter } from "@/components/mission-control/data-platform/data-pipeline-operations-center";
import { DatasetRegistryDashboard } from "@/components/mission-control/data-platform/dataset-registry-dashboard";
import { DataContractCenter } from "@/components/mission-control/data-platform/data-contract-center";
import { DataCatalogDashboard } from "@/components/mission-control/data-platform/data-catalog-dashboard";
import { DataLineageCenter } from "@/components/mission-control/data-platform/data-lineage-center";
import { StreamingOperationsDashboard } from "@/components/mission-control/data-platform/streaming-operations-dashboard";
import { BatchPipelineDashboard } from "@/components/mission-control/data-platform/batch-pipeline-dashboard";
import { CDCOperationsCenter } from "@/components/mission-control/data-platform/c-d-c-operations-center";
import { DataQualityDashboard } from "@/components/mission-control/data-platform/data-quality-dashboard";
import { ValidationOperationsCenter } from "@/components/mission-control/data-platform/validation-operations-center";
import { DataMeshDashboard } from "@/components/mission-control/data-platform/data-mesh-dashboard";
import { DataFabricOperationsCenter } from "@/components/mission-control/data-platform/data-fabric-operations-center";
import { RetentionGovernanceDashboard } from "@/components/mission-control/data-platform/retention-governance-dashboard";
import { DataEngineeringEvidenceLedger } from "@/components/mission-control/data-platform/data-engineering-evidence-ledger";
import { EnterpriseDataPlatformOverview } from "@/components/mission-control/data-platform/enterprise-data-platform-overview";

export default function DataPlatformGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Data Platform Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing data pipelines, quality, and lineage</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">DATA PLATFORM GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DataPipelineOperationsCenter />
        <DatasetRegistryDashboard />
        <DataContractCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataCatalogDashboard />
        <DataLineageCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StreamingOperationsDashboard />
        <BatchPipelineDashboard />
        <CDCOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataQualityDashboard />
        <ValidationOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DataMeshDashboard />
        <DataFabricOperationsCenter />
        <RetentionGovernanceDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataEngineeringEvidenceLedger />
        <EnterpriseDataPlatformOverview />
      </div>
    </div>
  );
}
