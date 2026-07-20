import React from 'react';
import { EnterpriseSearchDashboard } from "@/components/mission-control/search/enterprise-search-dashboard";
import { SearchCatalogCenter } from "@/components/mission-control/search/search-catalog-center";
import { SearchIndexRegistry } from "@/components/mission-control/search/search-index-registry";
import { MetadataIndexDashboard } from "@/components/mission-control/search/metadata-index-dashboard";
import { SearchPermissionMatrix } from "@/components/mission-control/search/search-permission-matrix";
import { RetrievalOperationsCenter } from "@/components/mission-control/search/retrieval-operations-center";
import { SearchAnalyticsBoard } from "@/components/mission-control/search/search-analytics-board";
import { CrawlExecutionDashboard } from "@/components/mission-control/search/crawl-execution-dashboard";
import { SearchPolicyCenter } from "@/components/mission-control/search/search-policy-center";
import { SearchAuditCenter } from "@/components/mission-control/search/search-audit-center";
import { SearchEvidenceLedger } from "@/components/mission-control/search/search-evidence-ledger";
import { SearchConfigurationDashboard } from "@/components/mission-control/search/search-configuration-dashboard";
import { IndexSchedulingCenter } from "@/components/mission-control/search/index-scheduling-center";
import { SearchExecutionTimeline } from "@/components/mission-control/search/search-execution-timeline";
import { ConstitutionalSearchOverview } from "@/components/mission-control/search/constitutional-search-overview";

export default function SearchGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Search & Discovery Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing indexes, retrievals, permissions, and crawl schedules</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">SEARCH GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConstitutionalSearchOverview />
        <EnterpriseSearchDashboard />
        <SearchCatalogCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SearchIndexRegistry />
        <MetadataIndexDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SearchPermissionMatrix />
        <RetrievalOperationsCenter />
        <SearchAnalyticsBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CrawlExecutionDashboard />
        <SearchPolicyCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <IndexSchedulingCenter />
        <SearchExecutionTimeline />
        <SearchEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SearchAuditCenter />
        <SearchConfigurationDashboard />
      </div>
    </div>
  );
}
