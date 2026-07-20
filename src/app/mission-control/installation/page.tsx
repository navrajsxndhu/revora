import React from 'react';
import { InstallationOverview } from '@/components/mission-control/installation/InstallationOverview';
import { BootstrapSessions } from '@/components/mission-control/installation/BootstrapSessions';
import { ProvisioningCenter } from '@/components/mission-control/installation/ProvisioningCenter';
import { EnvironmentRegistry } from '@/components/mission-control/installation/EnvironmentRegistry';
import { InfrastructureRegistry } from '@/components/mission-control/installation/InfrastructureRegistry';
import { InitializationStatus } from '@/components/mission-control/installation/InitializationStatus';
import { DependencyValidationCenter } from '@/components/mission-control/installation/DependencyValidationCenter';
import { ManifestCenter } from '@/components/mission-control/installation/ManifestCenter';
import { InstallationEvidence } from '@/components/mission-control/installation/InstallationEvidence';
import { RuntimeIntegration } from '@/components/mission-control/installation/RuntimeIntegration';
import { InstallationPolicies } from '@/components/mission-control/installation/InstallationPolicies';
import { ComplianceStatus } from '@/components/mission-control/installation/ComplianceStatus';
import { RuntimeLedger } from '@/components/mission-control/installation/RuntimeLedger';
import { AuditTimeline } from '@/components/mission-control/installation/AuditTimeline';
import { ExecutiveSummary } from '@/components/mission-control/installation/ExecutiveSummary';

export default function InstallationGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Enterprise Installation Governance</h1>
        <p className="text-slate-400 text-sm mt-1">Constitutional Provisioning & Bootstrap Ledger</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <InstallationOverview />
        <BootstrapSessions />
        <ProvisioningCenter />
        <EnvironmentRegistry />
        <InfrastructureRegistry />
        <InitializationStatus />
        <DependencyValidationCenter />
        <ManifestCenter />
        <InstallationEvidence />
        <RuntimeIntegration />
        <InstallationPolicies />
        <ComplianceStatus />
        <RuntimeLedger />
        <AuditTimeline />
        <ExecutiveSummary />
      </div>
    </div>
  );
}
