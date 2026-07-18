import React from 'react';
import { EnterpriseMaintenanceOverview } from "@/components/mission-control/maintenance/enterprise-maintenance-overview";
import { MaintenanceOperationsCenter } from "@/components/mission-control/maintenance/maintenance-operations-center";
import { WorkOrderDashboard } from "@/components/mission-control/maintenance/work-order-dashboard";
import { PreventiveMaintenanceDashboard } from "@/components/mission-control/maintenance/preventive-maintenance-dashboard";
import { CorrectiveMaintenanceCenter } from "@/components/mission-control/maintenance/corrective-maintenance-center";
import { EquipmentInspectionDashboard } from "@/components/mission-control/maintenance/equipment-inspection-dashboard";
import { ReliabilityEngineeringCenter } from "@/components/mission-control/maintenance/reliability-engineering-center";
import { SparePartsOperationsDashboard } from "@/components/mission-control/maintenance/spare-parts-operations-dashboard";
import { EquipmentAvailabilityMatrix } from "@/components/mission-control/maintenance/equipment-availability-matrix";
import { MaintenanceGovernanceBoard } from "@/components/mission-control/maintenance/maintenance-governance-board";
import { MaintenanceComplianceMatrix } from "@/components/mission-control/maintenance/maintenance-compliance-matrix";
import { MaintenanceValidationCenter } from "@/components/mission-control/maintenance/maintenance-validation-center";
import { ConstitutionalMaintenanceLedger } from "@/components/mission-control/maintenance/constitutional-maintenance-ledger";
import { ReliabilityHealthDashboard } from "@/components/mission-control/maintenance/reliability-health-dashboard";
import { ExecutiveAssetPerformanceDashboard } from "@/components/mission-control/maintenance/executive-asset-performance-dashboard";

export default function MaintenanceGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Asset Performance & Maintenance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing reliability and physical asset execution</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">MAINTENANCE GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveAssetPerformanceDashboard />
        <EnterpriseMaintenanceOverview />
        <MaintenanceValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MaintenanceOperationsCenter />
        <ReliabilityEngineeringCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <WorkOrderDashboard />
        <PreventiveMaintenanceDashboard />
        <CorrectiveMaintenanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EquipmentInspectionDashboard />
        <EquipmentAvailabilityMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SparePartsOperationsDashboard />
        <MaintenanceGovernanceBoard />
        <MaintenanceComplianceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalMaintenanceLedger />
        <ReliabilityHealthDashboard />
      </div>
    </div>
  );
}
