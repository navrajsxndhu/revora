import React from 'react';
import { EnterpriseManufacturingOverview } from "@/components/mission-control/manufacturing/enterprise-manufacturing-overview";
import { PlantOperationsCenter } from "@/components/mission-control/manufacturing/plant-operations-center";
import { ProductionLineDashboard } from "@/components/mission-control/manufacturing/production-line-dashboard";
import { WorkCenterMonitor } from "@/components/mission-control/manufacturing/work-center-monitor";
import { ManufacturingOrderCenter } from "@/components/mission-control/manufacturing/manufacturing-order-center";
import { BOMManagementDashboard } from "@/components/mission-control/manufacturing/b-o-m-management-dashboard";
import { RoutingValidationCenter } from "@/components/mission-control/manufacturing/routing-validation-center";
import { ProductionScheduleBoard } from "@/components/mission-control/manufacturing/production-schedule-board";
import { MaterialConsumptionDashboard } from "@/components/mission-control/manufacturing/material-consumption-dashboard";
import { MachineUtilizationCenter } from "@/components/mission-control/manufacturing/machine-utilization-center";
import { ProductionTraceabilityDashboard } from "@/components/mission-control/manufacturing/production-traceability-dashboard";
import { ManufacturingValidationCenter } from "@/components/mission-control/manufacturing/manufacturing-validation-center";
import { ConstitutionalManufacturingLedger } from "@/components/mission-control/manufacturing/constitutional-manufacturing-ledger";
import { ManufacturingHealthDashboard } from "@/components/mission-control/manufacturing/manufacturing-health-dashboard";
import { ExecutiveManufacturingDashboard } from "@/components/mission-control/manufacturing/executive-manufacturing-dashboard";

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Manufacturing, Production & Shop Floor Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing manufacturing and production execution</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">MANUFACTURING: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveManufacturingDashboard />
        <EnterpriseManufacturingOverview />
        <ManufacturingValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlantOperationsCenter />
        <ProductionLineDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <WorkCenterMonitor />
        <MachineUtilizationCenter />
        <MaterialConsumptionDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ManufacturingOrderCenter />
        <ProductionScheduleBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BOMManagementDashboard />
        <RoutingValidationCenter />
        <ProductionTraceabilityDashboard />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ManufacturingHealthDashboard />
        <ConstitutionalManufacturingLedger />
      </div>
    </div>
  );
}
