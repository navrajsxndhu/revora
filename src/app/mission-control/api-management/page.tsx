import React from 'react';
import { EnterpriseAPIRegistry } from "@/components/mission-control/api-management/enterprise-api-registry";
import { APIGatewayDashboard } from "@/components/mission-control/api-management/api-gateway-dashboard";
import { EndpointOperationsCenter } from "@/components/mission-control/api-management/endpoint-operations-center";
import { APIContractCenter } from "@/components/mission-control/api-management/api-contract-center";
import { APISpecificationDashboard } from "@/components/mission-control/api-management/api-specification-dashboard";
import { ConsumerRegistryCenter } from "@/components/mission-control/api-management/consumer-registry-center";
import { SubscriptionOperationsDashboard } from "@/components/mission-control/api-management/subscription-operations-dashboard";
import { APIPolicyDashboard } from "@/components/mission-control/api-management/api-policy-dashboard";
import { RoutingGovernanceCenter } from "@/components/mission-control/api-management/routing-governance-center";
import { CertificateManagementCenter } from "@/components/mission-control/api-management/certificate-management-center";
import { APIDeploymentDashboard } from "@/components/mission-control/api-management/api-deployment-dashboard";
import { APITelemetryCenter } from "@/components/mission-control/api-management/api-telemetry-center";
import { APIEvidenceLedger } from "@/components/mission-control/api-management/api-evidence-ledger";
import { APILifecycleDashboard } from "@/components/mission-control/api-management/api-lifecycle-dashboard";
import { EnterpriseAPIOverview } from "@/components/mission-control/api-management/enterprise-api-overview";

export default function APIManagementGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise API Management Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing API gateways, contracts, and lifecycle</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">API GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnterpriseAPIRegistry />
        <APIGatewayDashboard />
        <EndpointOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <APIContractCenter />
        <APISpecificationDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ConsumerRegistryCenter />
        <SubscriptionOperationsDashboard />
        <APIPolicyDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RoutingGovernanceCenter />
        <CertificateManagementCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <APIDeploymentDashboard />
        <APITelemetryCenter />
        <APIEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <APILifecycleDashboard />
        <EnterpriseAPIOverview />
      </div>
    </div>
  );
}
