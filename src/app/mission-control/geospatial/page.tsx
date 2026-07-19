import React from 'react';
import { EnterpriseFacilityCenter } from "@/components/mission-control/geospatial/enterprise-facility-center";
import { RegionalOperationsDashboard } from "@/components/mission-control/geospatial/regional-operations-dashboard";
import { TerritoryGovernanceMatrix } from "@/components/mission-control/geospatial/territory-governance-matrix";
import { AdministrativeBoundaryCenter } from "@/components/mission-control/geospatial/administrative-boundary-center";
import { SpatialAssetRegistry } from "@/components/mission-control/geospatial/spatial-asset-registry";
import { LocationHierarchyDashboard } from "@/components/mission-control/geospatial/location-hierarchy-dashboard";
import { CoordinateValidationCenter } from "@/components/mission-control/geospatial/coordinate-validation-center";
import { OperationalZoneDashboard } from "@/components/mission-control/geospatial/operational-zone-dashboard";
import { GeofenceGovernanceCenter } from "@/components/mission-control/geospatial/geofence-governance-center";
import { SpatialRelationshipMatrix } from "@/components/mission-control/geospatial/spatial-relationship-matrix";
import { MapLayerRegistry } from "@/components/mission-control/geospatial/map-layer-registry";
import { SpatialDatasetCenter } from "@/components/mission-control/geospatial/spatial-dataset-center";
import { LocationEvidenceLedger } from "@/components/mission-control/geospatial/location-evidence-ledger";
import { LocationAuditDashboard } from "@/components/mission-control/geospatial/location-audit-dashboard";
import { ConstitutionalSpatialOperationsCenter } from "@/components/mission-control/geospatial/constitutional-spatial-operations-center";

export default function GeospatialGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Geospatial & Location Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing facilities, territories, and spatial assets</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-400 font-mono text-sm">SPATIAL GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnterpriseFacilityCenter />
        <RegionalOperationsDashboard />
        <TerritoryGovernanceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdministrativeBoundaryCenter />
        <SpatialAssetRegistry />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <LocationHierarchyDashboard />
        <CoordinateValidationCenter />
        <OperationalZoneDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GeofenceGovernanceCenter />
        <SpatialRelationshipMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MapLayerRegistry />
        <SpatialDatasetCenter />
        <LocationEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LocationAuditDashboard />
        <ConstitutionalSpatialOperationsCenter />
      </div>
    </div>
  );
}
