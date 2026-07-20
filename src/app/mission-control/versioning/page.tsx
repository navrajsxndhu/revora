import React from 'react';
import { VersionOverview } from '@/components/mission-control/versioning/VersionOverview';
import { UpgradeCenter } from '@/components/mission-control/versioning/UpgradeCenter';
import { MigrationCenter } from '@/components/mission-control/versioning/MigrationCenter';
import { RollbackCenter } from '@/components/mission-control/versioning/RollbackCenter';
import { CompatibilityMatrix } from '@/components/mission-control/versioning/CompatibilityMatrix';
import { VersionTimeline } from '@/components/mission-control/versioning/VersionTimeline';
import { UpgradeEvidence } from '@/components/mission-control/versioning/UpgradeEvidence';
import { MigrationEvidence } from '@/components/mission-control/versioning/MigrationEvidence';
import { RuntimeIntegration } from '@/components/mission-control/versioning/RuntimeIntegration';
import { VersionPolicies } from '@/components/mission-control/versioning/VersionPolicies';
import { ComplianceStatus } from '@/components/mission-control/versioning/ComplianceStatus';
import { AuditTimeline } from '@/components/mission-control/versioning/AuditTimeline';
import { ExecutionLedger } from '@/components/mission-control/versioning/ExecutionLedger';
import { TransitionStatus } from '@/components/mission-control/versioning/TransitionStatus';
import { ExecutiveSummary } from '@/components/mission-control/versioning/ExecutiveSummary';

export default function VersioningGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Enterprise Version Governance</h1>
        <p className="text-slate-400 text-sm mt-1">Constitutional Upgrade & Migration Ledger</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <VersionOverview />
        <UpgradeCenter />
        <MigrationCenter />
        <RollbackCenter />
        <CompatibilityMatrix />
        <VersionTimeline />
        <UpgradeEvidence />
        <MigrationEvidence />
        <RuntimeIntegration />
        <VersionPolicies />
        <ComplianceStatus />
        <AuditTimeline />
        <ExecutionLedger />
        <TransitionStatus />
        <ExecutiveSummary />
      </div>
    </div>
  );
}
