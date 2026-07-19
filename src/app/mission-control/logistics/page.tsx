import React from 'react';
import { ExecutiveLogisticsOverview } from "@/components/mission-control/logistics/executive-logistics-overview";
import { FleetOperationsCenter } from "@/components/mission-control/logistics/fleet-operations-center";
import { TransportationNetworkDashboard } from "@/components/mission-control/logistics/transportation-network-dashboard";
import { ShipmentTrackingMatrix } from "@/components/mission-control/logistics/shipment-tracking-matrix";
import { CarrierPerformanceCenter } from "@/components/mission-control/logistics/carrier-performance-center";
import { DistributionOperationsDashboard } from "@/components/mission-control/logistics/distribution-operations-dashboard";
import { DeliveryEvidenceCenter } from "@/components/mission-control/logistics/delivery-evidence-center";
import { RouteGovernanceMatrix } from "@/components/mission-control/logistics/route-governance-matrix";
import { CustomsComplianceDashboard } from "@/components/mission-control/logistics/customs-compliance-dashboard";
import { FleetUtilizationCenter } from "@/components/mission-control/logistics/fleet-utilization-center";
import { TransportationRiskDashboard } from "@/components/mission-control/logistics/transportation-risk-dashboard";
import { LogisticsLedger } from "@/components/mission-control/logistics/logistics-ledger";
import { FleetTelemetryDashboard } from "@/components/mission-control/logistics/fleet-telemetry-dashboard";
import { TransportationAuditCenter } from "@/components/mission-control/logistics/transportation-audit-center";
import { ExecutiveLogisticsCommandCenter } from "@/components/mission-control/logistics/executive-logistics-command-center";

export default function LogisticsGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Logistics, Fleet & Transportation</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing enterprise physical execution</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">LOGISTICS GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveLogisticsCommandCenter />
        <ExecutiveLogisticsOverview />
        <TransportationRiskDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FleetOperationsCenter />
        <FleetUtilizationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TransportationNetworkDashboard />
        <ShipmentTrackingMatrix />
        <CarrierPerformanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DistributionOperationsDashboard />
        <DeliveryEvidenceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RouteGovernanceMatrix />
        <CustomsComplianceDashboard />
        <FleetTelemetryDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LogisticsLedger />
        <TransportationAuditCenter />
      </div>
    </div>
  );
}
