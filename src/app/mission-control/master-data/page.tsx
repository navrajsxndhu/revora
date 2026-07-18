import React from 'react';
import { EnterpriseMasterDataOverview } from "@/components/mission-control/master-data/enterprise-master-data-overview";
import { MasterDomainDashboard } from "@/components/mission-control/master-data/master-domain-dashboard";
import { CanonicalRecordCenter } from "@/components/mission-control/master-data/canonical-record-center";
import { GoldenRecordDashboard } from "@/components/mission-control/master-data/golden-record-dashboard";
import { ReferenceDataCenter } from "@/components/mission-control/master-data/reference-data-center";
import { MetadataCatalogDashboard } from "@/components/mission-control/master-data/metadata-catalog-dashboard";
import { BusinessGlossaryCenter } from "@/components/mission-control/master-data/business-glossary-center";
import { DataStewardshipDashboard } from "@/components/mission-control/master-data/data-stewardship-dashboard";
import { DataOwnershipMatrix } from "@/components/mission-control/master-data/data-ownership-matrix";
import { MetadataComplianceDashboard } from "@/components/mission-control/master-data/metadata-compliance-dashboard";
import { MetadataValidationCenter } from "@/components/mission-control/master-data/metadata-validation-center";
import { ConstitutionalMetadataLedger } from "@/components/mission-control/master-data/constitutional-metadata-ledger";
import { MetadataAuditDashboard } from "@/components/mission-control/master-data/metadata-audit-dashboard";
import { MetadataHealthDashboard } from "@/components/mission-control/master-data/metadata-health-dashboard";
import { ExecutiveMasterDataDashboard } from "@/components/mission-control/master-data/executive-master-data-dashboard";

export default function MasterDataGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Master Data & Metadata Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing golden records, taxonomies, and entity ownership</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">MDM GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveMasterDataDashboard />
        <EnterpriseMasterDataOverview />
        <MetadataValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MasterDomainDashboard />
        <GoldenRecordDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CanonicalRecordCenter />
        <ReferenceDataCenter />
        <MetadataCatalogDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BusinessGlossaryCenter />
        <DataStewardshipDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DataOwnershipMatrix />
        <MetadataComplianceDashboard />
        <MetadataAuditDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalMetadataLedger />
        <MetadataHealthDashboard />
      </div>
    </div>
  );
}
