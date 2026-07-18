import React from 'react';
import { EnterpriseIntegrationOverview } from "@/components/mission-control/integration/enterprise-integration-overview";
import { IntegrationRegistryDashboard } from "@/components/mission-control/integration/integration-registry-dashboard";
import { ConnectorOperationsCenter } from "@/components/mission-control/integration/connector-operations-center";
import { WorkflowGovernanceDashboard } from "@/components/mission-control/integration/workflow-governance-dashboard";
import { MessageQueueCenter } from "@/components/mission-control/integration/message-queue-center";
import { EventBusOperationsDashboard } from "@/components/mission-control/integration/event-bus-operations-dashboard";
import { IntegrationMappingCenter } from "@/components/mission-control/integration/integration-mapping-center";
import { TransformationGovernanceDashboard } from "@/components/mission-control/integration/transformation-governance-dashboard";
import { IntegrationContractMatrix } from "@/components/mission-control/integration/integration-contract-matrix";
import { ConnectivityHealthDashboard } from "@/components/mission-control/integration/connectivity-health-dashboard";
import { IntegrationComplianceMatrix } from "@/components/mission-control/integration/integration-compliance-matrix";
import { IntegrationValidationCenter } from "@/components/mission-control/integration/integration-validation-center";
import { ConstitutionalIntegrationLedger } from "@/components/mission-control/integration/constitutional-integration-ledger";
import { IntegrationAuditDashboard } from "@/components/mission-control/integration/integration-audit-dashboard";
import { ExecutiveConnectivityDashboard } from "@/components/mission-control/integration/executive-connectivity-dashboard";

export default function IntegrationGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Integration & Connectivity Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing API orchestrations, workflows, and event brokers</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-500 font-mono text-sm">INTEGRATION GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveConnectivityDashboard />
        <EnterpriseIntegrationOverview />
        <IntegrationValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IntegrationRegistryDashboard />
        <ConnectorOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <WorkflowGovernanceDashboard />
        <EventBusOperationsDashboard />
        <MessageQueueCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IntegrationMappingCenter />
        <TransformationGovernanceDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <IntegrationContractMatrix />
        <IntegrationComplianceMatrix />
        <IntegrationAuditDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalIntegrationLedger />
        <ConnectivityHealthDashboard />
      </div>
    </div>
  );
}
