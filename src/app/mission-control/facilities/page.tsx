import React from 'react';
import { EnterpriseFacilitiesOverview } from "@/components/mission-control/facilities/enterprise-facilities-overview";
import { CampusOperationsDashboard } from "@/components/mission-control/facilities/campus-operations-dashboard";
import { BuildingOperationsCenter } from "@/components/mission-control/facilities/building-operations-center";
import { WorkspaceUtilizationDashboard } from "@/components/mission-control/facilities/workspace-utilization-dashboard";
import { OccupancyOperationsCenter } from "@/components/mission-control/facilities/occupancy-operations-center";
import { UtilityInfrastructureDashboard } from "@/components/mission-control/facilities/utility-infrastructure-dashboard";
import { MaintenanceOperationsCenter } from "@/components/mission-control/facilities/maintenance-operations-center";
import { FacilityInspectionDashboard } from "@/components/mission-control/facilities/facility-inspection-dashboard";
import { WorkplaceReservationCenter } from "@/components/mission-control/facilities/workplace-reservation-center";
import { FacilityProjectDashboard } from "@/components/mission-control/facilities/facility-project-dashboard";
import { FacilityComplianceMatrix } from "@/components/mission-control/facilities/facility-compliance-matrix";
import { FacilityValidationCenter } from "@/components/mission-control/facilities/facility-validation-center";
import { ConstitutionalFacilityLedger } from "@/components/mission-control/facilities/constitutional-facility-ledger";
import { FacilityHealthDashboard } from "@/components/mission-control/facilities/facility-health-dashboard";
import { ExecutiveFacilitiesDashboard } from "@/components/mission-control/facilities/executive-facilities-dashboard";

export default function FacilitiesGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Facilities & Real Estate Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing enterprise campuses, physical infrastructure, and workspace</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-amber-950 border border-amber-900 rounded-md">
            <span className="text-amber-500 font-mono text-sm">FACILITIES GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveFacilitiesDashboard />
        <EnterpriseFacilitiesOverview />
        <FacilityValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CampusOperationsDashboard />
        <BuildingOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <WorkspaceUtilizationDashboard />
        <OccupancyOperationsCenter />
        <WorkplaceReservationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UtilityInfrastructureDashboard />
        <MaintenanceOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FacilityInspectionDashboard />
        <FacilityProjectDashboard />
        <FacilityComplianceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalFacilityLedger />
        <FacilityHealthDashboard />
      </div>
    </div>
  );
}
