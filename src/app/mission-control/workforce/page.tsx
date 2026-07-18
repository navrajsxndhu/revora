import React from 'react';
import { EnterpriseWorkforceOverview } from "@/components/mission-control/workforce/enterprise-workforce-overview";
import { OrganizationStructure } from "@/components/mission-control/workforce/organization-structure";
import { BusinessUnitDashboard } from "@/components/mission-control/workforce/business-unit-dashboard";
import { DepartmentRegistry } from "@/components/mission-control/workforce/department-registry";
import { TeamOperationsCenter } from "@/components/mission-control/workforce/team-operations-center";
import { PositionRegistry } from "@/components/mission-control/workforce/position-registry";
import { WorkforceDirectory } from "@/components/mission-control/workforce/workforce-directory";
import { SkillsMatrix } from "@/components/mission-control/workforce/skills-matrix";
import { CertificationCenter } from "@/components/mission-control/workforce/certification-center";
import { CapacityDashboard } from "@/components/mission-control/workforce/capacity-dashboard";
import { WorkforceAllocationCenter } from "@/components/mission-control/workforce/workforce-allocation-center";
import { SuccessionPlanningDashboard } from "@/components/mission-control/workforce/succession-planning-dashboard";
import { WorkforceValidationCenter } from "@/components/mission-control/workforce/workforce-validation-center";
import { ConstitutionalWorkforceLedger } from "@/components/mission-control/workforce/constitutional-workforce-ledger";
import { ExecutiveWorkforceDashboard } from "@/components/mission-control/workforce/executive-workforce-dashboard";

export default function WorkforcePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Workforce & Human Capital Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing organizational execution</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">WORKFORCE: ALIGNED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveWorkforceDashboard />
        <EnterpriseWorkforceOverview />
        <WorkforceValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OrganizationStructure />
        <BusinessUnitDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DepartmentRegistry />
        <TeamOperationsCenter />
        <PositionRegistry />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WorkforceDirectory />
        <SkillsMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CertificationCenter />
        <CapacityDashboard />
        <WorkforceAllocationCenter />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <SuccessionPlanningDashboard />
        <ConstitutionalWorkforceLedger />
      </div>
    </div>
  );
}
