import React from 'react';
import { EnterpriseSupplyChainOverview } from "@/components/mission-control/supply-chain/enterprise-supply-chain-overview";
import { WarehouseOperationsCenter } from "@/components/mission-control/supply-chain/warehouse-operations-center";
import { InventoryDashboard } from "@/components/mission-control/supply-chain/inventory-dashboard";
import { StockReservationCenter } from "@/components/mission-control/supply-chain/stock-reservation-center";
import { StockTransferMatrix } from "@/components/mission-control/supply-chain/stock-transfer-matrix";
import { ReplenishmentDashboard } from "@/components/mission-control/supply-chain/replenishment-dashboard";
import { ShipmentOperationsCenter } from "@/components/mission-control/supply-chain/shipment-operations-center";
import { CarrierPerformanceDashboard } from "@/components/mission-control/supply-chain/carrier-performance-dashboard";
import { DeliveryMonitoringCenter } from "@/components/mission-control/supply-chain/delivery-monitoring-center";
import { DemandPlanningDashboard } from "@/components/mission-control/supply-chain/demand-planning-dashboard";
import { InventoryAuditCenter } from "@/components/mission-control/supply-chain/inventory-audit-center";
import { SupplyChainValidationCenter } from "@/components/mission-control/supply-chain/supply-chain-validation-center";
import { ConstitutionalSupplyChainLedger } from "@/components/mission-control/supply-chain/constitutional-supply-chain-ledger";
import { SupplyChainHealthDashboard } from "@/components/mission-control/supply-chain/supply-chain-health-dashboard";
import { ExecutiveSupplyChainDashboard } from "@/components/mission-control/supply-chain/executive-supply-chain-dashboard";

export default function SupplyChainPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Supply Chain & Logistics Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing inventory and distribution execution</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">SUPPLY CHAIN: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveSupplyChainDashboard />
        <EnterpriseSupplyChainOverview />
        <SupplyChainValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WarehouseOperationsCenter />
        <InventoryDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StockReservationCenter />
        <StockTransferMatrix />
        <ReplenishmentDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemandPlanningDashboard />
        <InventoryAuditCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ShipmentOperationsCenter />
        <CarrierPerformanceDashboard />
        <DeliveryMonitoringCenter />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <SupplyChainHealthDashboard />
        <ConstitutionalSupplyChainLedger />
      </div>
    </div>
  );
}
