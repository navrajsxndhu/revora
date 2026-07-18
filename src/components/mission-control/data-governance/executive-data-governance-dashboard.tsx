"use client";

import React from "react";
import { DataGovernanceOverview } from "./data-governance-overview";
import { EnterpriseDatasetRegistry } from "./enterprise-dataset-registry";
import { MetadataCatalog } from "./metadata-catalog";
import { ClassificationCenter } from "./classification-center";
import { DataLineage } from "./data-lineage";
import { QualityCenter } from "./quality-center";
import { OwnershipCenter } from "./ownership-center";
import { RetentionCenter } from "./retention-center";
import { LifecycleCenter } from "./lifecycle-center";
import { MasterDataCenter } from "./master-data-center";
import { ReferenceDataCenter } from "./reference-data-center";
import { MetadataValidation } from "./metadata-validation";
import { MetadataLedger } from "./metadata-ledger";
import { MetadataSimulator } from "./metadata-simulator";

export function ExecutiveDataGovernanceDashboard() {
  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-200 font-sans tracking-tight">Enterprise Data Governance & Metadata Lifecycle</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Deterministically mapping and governing enterprise information assets.</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-emerald-400 font-mono font-bold animate-pulse">DGM ENGINE ACTIVE</div>
          <div className="text-[10px] text-slate-500 font-mono mt-1">ENFORCING QUALITY & LINEAGE</div>
        </div>
      </div>

      <DataGovernanceOverview />

      <div className="grid grid-cols-12 gap-6 h-[400px]">
        <div className="col-span-5 h-full"><EnterpriseDatasetRegistry /></div>
        <div className="col-span-3 h-full"><ClassificationCenter /></div>
        <div className="col-span-4 h-full"><QualityCenter /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[300px]">
        <div className="col-span-6 h-full"><DataLineage /></div>
        <div className="col-span-3 h-full"><OwnershipCenter /></div>
        <div className="col-span-3 h-full"><MetadataValidation /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-3 h-full"><MetadataCatalog /></div>
        <div className="col-span-3 h-full"><RetentionCenter /></div>
        <div className="col-span-3 h-full"><LifecycleCenter /></div>
        <div className="col-span-3 h-full"><MasterDataCenter /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-4 h-full"><ReferenceDataCenter /></div>
        <div className="col-span-4 h-full"><MetadataLedger /></div>
        <div className="col-span-4 h-full"><MetadataSimulator /></div>
      </div>
    </div>
  );
}
