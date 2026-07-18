import React from 'react';
import { EnterpriseAssetOverview } from "@/components/mission-control/assets/enterprise-asset-overview";
import { AssetRegistry } from "@/components/mission-control/assets/asset-registry";
import { LifecycleManagementCenter } from "@/components/mission-control/assets/lifecycle-management-center";
import { InventoryDashboard } from "@/components/mission-control/assets/inventory-dashboard";
import { AcquisitionCenter } from "@/components/mission-control/assets/acquisition-center";
import { MaintenanceOperationsCenter } from "@/components/mission-control/assets/maintenance-operations-center";
import { MaintenanceScheduleBoard } from "@/components/mission-control/assets/maintenance-schedule-board";
import { CalibrationCenter } from "@/components/mission-control/assets/calibration-center";
import { InspectionDashboard } from "@/components/mission-control/assets/inspection-dashboard";
import { WarrantyTracker } from "@/components/mission-control/assets/warranty-tracker";
import { AssetTransferCenter } from "@/components/mission-control/assets/asset-transfer-center";
import { RetirementAndDisposalCenter } from "@/components/mission-control/assets/retirement-and-disposal-center";
import { AssetValidationCenter } from "@/components/mission-control/assets/asset-validation-center";
import { ConstitutionalAssetLedger } from "@/components/mission-control/assets/constitutional-asset-ledger";
import { ExecutiveAssetOperationsDashboard } from "@/components/mission-control/assets/executive-asset-operations-dashboard";

export default function AssetsPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Asset Lifecycle, Inventory & Maintenance Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing enterprise assets</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">ASSET LIFECYCLE: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveAssetOperationsDashboard />
        <EnterpriseAssetOverview />
        <AssetValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetRegistry />
        <LifecycleManagementCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InventoryDashboard />
        <AcquisitionCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MaintenanceOperationsCenter />
        <MaintenanceScheduleBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CalibrationCenter />
        <InspectionDashboard />
        <WarrantyTracker />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetTransferCenter />
        <RetirementAndDisposalCenter />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ConstitutionalAssetLedger />
      </div>
    </div>
  );
}
