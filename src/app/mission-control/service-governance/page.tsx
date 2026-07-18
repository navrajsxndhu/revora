import React from 'react';
import { ServiceGovernanceOverview } from "@/components/mission-control/service-governance/service-governance-overview";
import { EnterpriseServiceCatalog } from "@/components/mission-control/service-governance/enterprise-service-catalog";
import { ServiceDependencyCenter } from "@/components/mission-control/service-governance/service-dependency-center";
import { SlaCenter } from "@/components/mission-control/service-governance/sla-center";
import { SloCenter } from "@/components/mission-control/service-governance/slo-center";
import { AvailabilityCenter } from "@/components/mission-control/service-governance/availability-center";
import { CustomerImpactCenter } from "@/components/mission-control/service-governance/customer-impact-center";
import { ServiceValidation } from "@/components/mission-control/service-governance/service-validation";
import { ServiceHealthCenter } from "@/components/mission-control/service-governance/service-health-center";
import { OperationalObjectives } from "@/components/mission-control/service-governance/operational-objectives";
import { ServiceTimeline } from "@/components/mission-control/service-governance/service-timeline";
import { ServiceLedger } from "@/components/mission-control/service-governance/service-ledger";
import { ServiceSimulator } from "@/components/mission-control/service-governance/service-simulator";
import { ServiceAssessments } from "@/components/mission-control/service-governance/service-assessments";
import { ExecutiveServiceDashboard } from "@/components/mission-control/service-governance/executive-service-dashboard";

export default function ServiceGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Service Operations Center</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing enterprise services</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">STATUS: OPTIMAL</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveServiceDashboard />
        <ServiceGovernanceOverview />
        <ServiceAssessments />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EnterpriseServiceCatalog />
        <ServiceDependencyCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SlaCenter />
        <SloCenter />
        <OperationalObjectives />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AvailabilityCenter />
        <CustomerImpactCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ServiceValidation />
        <ServiceHealthCenter />
        <ServiceSimulator />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ServiceTimeline />
        <ServiceLedger />
      </div>
    </div>
  );
}
