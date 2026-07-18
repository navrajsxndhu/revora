import React from 'react';
import { EnterpriseEsgOverview } from "@/components/mission-control/esg/enterprise-esg-overview";
import { SustainabilityFrameworkDashboard } from "@/components/mission-control/esg/sustainability-framework-dashboard";
import { CarbonInventoryCenter } from "@/components/mission-control/esg/carbon-inventory-center";
import { EmissionsDashboard } from "@/components/mission-control/esg/emissions-dashboard";
import { EnergyOperationsCenter } from "@/components/mission-control/esg/energy-operations-center";
import { WaterManagementDashboard } from "@/components/mission-control/esg/water-management-dashboard";
import { WasteGovernanceCenter } from "@/components/mission-control/esg/waste-governance-center";
import { EthicalSourcingDashboard } from "@/components/mission-control/esg/ethical-sourcing-dashboard";
import { ClimateRiskDashboard } from "@/components/mission-control/esg/climate-risk-dashboard";
import { EsgDisclosureCenter } from "@/components/mission-control/esg/esg-disclosure-center";
import { EsgComplianceMatrix } from "@/components/mission-control/esg/esg-compliance-matrix";
import { EsgValidationCenter } from "@/components/mission-control/esg/esg-validation-center";
import { ConstitutionalEsgLedger } from "@/components/mission-control/esg/constitutional-esg-ledger";
import { EsgHealthDashboard } from "@/components/mission-control/esg/esg-health-dashboard";
import { ExecutiveSustainabilityDashboard } from "@/components/mission-control/esg/executive-sustainability-dashboard";

export default function EsgGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Sustainability & ESG Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing ESG initiatives, carbon accounting, and social responsibility</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">ESG GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveSustainabilityDashboard />
        <EnterpriseEsgOverview />
        <EsgValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SustainabilityFrameworkDashboard />
        <CarbonInventoryCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <EmissionsDashboard />
        <EnergyOperationsCenter />
        <WaterManagementDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WasteGovernanceCenter />
        <EthicalSourcingDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ClimateRiskDashboard />
        <EsgDisclosureCenter />
        <EsgComplianceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalEsgLedger />
        <EsgHealthDashboard />
      </div>
    </div>
  );
}
