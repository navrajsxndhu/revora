import React from 'react';
import { ClusterOverview } from '@/components/mission-control/clustering/ClusterOverview';
import { NodeRegistry } from '@/components/mission-control/clustering/NodeRegistry';
import { ClusterMembership } from '@/components/mission-control/clustering/ClusterMembership';
import { AvailabilityGroups } from '@/components/mission-control/clustering/AvailabilityGroups';
import { ReplicationStatus } from '@/components/mission-control/clustering/ReplicationStatus';
import { FailoverGovernance } from '@/components/mission-control/clustering/FailoverGovernance';
import { QuorumCenter } from '@/components/mission-control/clustering/QuorumCenter';
import { InfrastructureTopology } from '@/components/mission-control/clustering/InfrastructureTopology';
import { NodeHealth } from '@/components/mission-control/clustering/NodeHealth';
import { RuntimeIntegration } from '@/components/mission-control/clustering/RuntimeIntegration';
import { GovernancePolicies } from '@/components/mission-control/clustering/GovernancePolicies';
import { ComplianceStatus } from '@/components/mission-control/clustering/ComplianceStatus';
import { InfrastructureLedger } from '@/components/mission-control/clustering/InfrastructureLedger';
import { AuditTimeline } from '@/components/mission-control/clustering/AuditTimeline';
import { ExecutiveSummary } from '@/components/mission-control/clustering/ExecutiveSummary';

export default function ClusteringGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Enterprise Cluster Governance</h1>
        <p className="text-slate-400 text-sm mt-1">Constitutional High Availability & Distributed Infrastructure Ledger</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ClusterOverview />
        <NodeRegistry />
        <ClusterMembership />
        <AvailabilityGroups />
        <ReplicationStatus />
        <FailoverGovernance />
        <QuorumCenter />
        <InfrastructureTopology />
        <NodeHealth />
        <RuntimeIntegration />
        <GovernancePolicies />
        <ComplianceStatus />
        <InfrastructureLedger />
        <AuditTimeline />
        <ExecutiveSummary />
      </div>
    </div>
  );
}
