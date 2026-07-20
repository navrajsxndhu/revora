import React from 'react';
import { EnterpriseIntegrationCenter } from "@/components/mission-control/integration/enterprise-integration-center";
import { ConnectorRegistryDashboard } from "@/components/mission-control/integration/connector-registry-dashboard";
import { EventBusOperationsCenter } from "@/components/mission-control/integration/event-bus-operations-center";
import { MessageQueueDashboard } from "@/components/mission-control/integration/message-queue-dashboard";
import { WebhookOperationsCenter } from "@/components/mission-control/integration/webhook-operations-center";
import { IntegrationTopologyMatrix } from "@/components/mission-control/integration/integration-topology-matrix";
import { ConnectivityHealthBoard } from "@/components/mission-control/integration/connectivity-health-board";
import { ProtocolGovernanceCenter } from "@/components/mission-control/integration/protocol-governance-center";
import { ContractValidationDashboard } from "@/components/mission-control/integration/contract-validation-dashboard";
import { EndpointRegistryCenter } from "@/components/mission-control/integration/endpoint-registry-center";
import { IntegrationLedgerCenter } from "@/components/mission-control/integration/integration-ledger-center";
import { EventTelemetryDashboard } from "@/components/mission-control/integration/event-telemetry-dashboard";
import { ConnectorHealthCenter } from "@/components/mission-control/integration/connector-health-center";
import { EvidenceOperationsBoard } from "@/components/mission-control/integration/evidence-operations-board";
import { ConstitutionalIntegrationOverview } from "@/components/mission-control/integration/constitutional-integration-overview";

export default function IntegrationGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Integration & Connectivity Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing integrations, message queues, webhooks, and event buses</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">INTEGRATION GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConstitutionalIntegrationOverview />
        <EnterpriseIntegrationCenter />
        <IntegrationTopologyMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EventBusOperationsCenter />
        <MessageQueueDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ConnectorRegistryDashboard />
        <WebhookOperationsCenter />
        <EndpointRegistryCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProtocolGovernanceCenter />
        <ContractValidationDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ConnectivityHealthBoard />
        <ConnectorHealthCenter />
        <EventTelemetryDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IntegrationLedgerCenter />
        <EvidenceOperationsBoard />
      </div>
    </div>
  );
}
