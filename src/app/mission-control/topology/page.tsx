import React from "react";
import { Network, Activity, ShieldCheck } from "lucide-react";
import { TopologyOverview } from "@/components/mission-control/topology/topology-overview";
import { EnterpriseAssetRegistry } from "@/components/mission-control/topology/enterprise-asset-registry";
import { BusinessCapabilityMap } from "@/components/mission-control/topology/business-capability-map";
import { ServiceTopology } from "@/components/mission-control/topology/service-topology";
import { DependencyMatrix } from "@/components/mission-control/topology/dependency-matrix";
import { ApplicationPortfolio } from "@/components/mission-control/topology/application-portfolio";
import { CloudResourceCenter } from "@/components/mission-control/topology/cloud-resource-center";
import { NetworkTopology } from "@/components/mission-control/topology/network-topology";
import { OperationalLineage } from "@/components/mission-control/topology/operational-lineage";
import { BlastRadiusAnalyzer } from "@/components/mission-control/topology/blast-radius-analyzer";
import { TopologyHealthDashboard } from "@/components/mission-control/topology/topology-health-dashboard";
import { DependencyValidator } from "@/components/mission-control/topology/dependency-validator";
import { TopologySimulator } from "@/components/mission-control/topology/topology-simulator";
import { TopologyHistory } from "@/components/mission-control/topology/topology-history";
import { ExecutiveTopologyDashboard } from "@/components/mission-control/topology/executive-topology-dashboard";

export const metadata = {
  title: "Topology Command | Revora Mission Control",
};

export default function TopologyCommandCenterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-300 font-sans p-4 space-y-4">
      {/* Telemetry Header */}
      <header className="flex justify-between items-center border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-3">
          <Network className="w-5 h-5 text-indigo-400" />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Topology & Dependency Intelligence</h1>
            <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-1 flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              SYSTEM STATE: DETERMINISTIC | V 2026.5
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="text-right">
            <div className="text-[10px] text-slate-500 font-mono">INTEGRITY</div>
            <div className="text-sm font-bold text-indigo-400 flex items-center justify-end">
              <ShieldCheck className="w-3 h-3 mr-1" /> STRICT
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-slate-500 font-mono">TOPOLOGY INDEX</div>
            <div className="text-sm font-bold text-emerald-400 flex items-center justify-end">
              <Activity className="w-3 h-3 mr-1" /> 98.5%
            </div>
          </div>
        </div>
      </header>

      {/* Row 1: Executive KPI and Health */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-8 h-[140px]">
          <TopologyOverview />
        </div>
        <div className="col-span-12 xl:col-span-4 h-[140px]">
          <TopologyHealthDashboard />
        </div>
      </div>

      {/* Row 2: Business & Application Portfolios */}
      <div className="grid grid-cols-12 gap-4 h-[400px]">
        <div className="col-span-12 xl:col-span-6 h-full">
          <BusinessCapabilityMap />
        </div>
        <div className="col-span-12 xl:col-span-6 h-full">
          <ApplicationPortfolio />
        </div>
      </div>

      {/* Row 3: Service Topology & Matrices */}
      <div className="grid grid-cols-12 gap-4 h-[400px]">
        <div className="col-span-12 xl:col-span-8 h-full">
          <ServiceTopology />
        </div>
        <div className="col-span-12 xl:col-span-4 h-full">
          <DependencyMatrix />
        </div>
      </div>

      {/* Row 4: Core Assets & Network */}
      <div className="grid grid-cols-12 gap-4 h-[350px]">
        <div className="col-span-12 xl:col-span-6 h-full">
          <EnterpriseAssetRegistry />
        </div>
        <div className="col-span-12 xl:col-span-6 h-full flex flex-col space-y-4">
          <div className="flex-1">
            <CloudResourceCenter />
          </div>
          <div className="flex-1">
            <NetworkTopology />
          </div>
        </div>
      </div>

      {/* Row 5: Intelligence & Validation */}
      <div className="grid grid-cols-12 gap-4 h-[350px]">
        <div className="col-span-12 xl:col-span-4 h-full">
          <OperationalLineage />
        </div>
        <div className="col-span-12 xl:col-span-4 h-full">
          <BlastRadiusAnalyzer />
        </div>
        <div className="col-span-12 xl:col-span-4 h-full flex flex-col space-y-4">
          <div className="flex-1">
            <DependencyValidator />
          </div>
          <div className="flex-1">
            <TopologySimulator />
          </div>
        </div>
      </div>

      {/* Row 6: Ledger History */}
      <div className="grid grid-cols-12 gap-4 h-[250px]">
        <div className="col-span-12 h-full">
          <TopologyHistory />
        </div>
      </div>

      {/* Executive Footer */}
      <div className="pt-4 border-t border-slate-800">
        <ExecutiveTopologyDashboard />
      </div>
    </div>
  );
}
