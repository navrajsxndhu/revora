import React from 'react';
import { RuntimeKernelDashboard } from "@/components/mission-control/runtime/runtime-kernel-dashboard";
import { PlatformServiceRegistry } from "@/components/mission-control/runtime/platform-service-registry";
import { ExecutionContextCenter } from "@/components/mission-control/runtime/execution-context-center";
import { RuntimeHealthCenter } from "@/components/mission-control/runtime/runtime-health-center";
import { ClusterTopologyDashboard } from "@/components/mission-control/runtime/cluster-topology-dashboard";
import { DependencyMatrix } from "@/components/mission-control/runtime/dependency-matrix";
import { RuntimeLifecycleCenter } from "@/components/mission-control/runtime/runtime-lifecycle-center";
import { KernelStateBoard } from "@/components/mission-control/runtime/kernel-state-board";
import { HeartbeatDashboard } from "@/components/mission-control/runtime/heartbeat-dashboard";
import { RuntimeDiagnosticsCenter } from "@/components/mission-control/runtime/runtime-diagnostics-center";
import { PlatformCapabilityRegistry } from "@/components/mission-control/runtime/platform-capability-registry";
import { RuntimeCompatibilityMatrix } from "@/components/mission-control/runtime/runtime-compatibility-matrix";
import { ExecutionEvidenceLedger } from "@/components/mission-control/runtime/execution-evidence-ledger";
import { RuntimeConfigurationCenter } from "@/components/mission-control/runtime/runtime-configuration-center";
import { DistributedExecutionDashboard } from "@/components/mission-control/runtime/distributed-execution-dashboard";

export default function RuntimeGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Platform Runtime & Kernel Services</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing execution, infrastructure, and runtime state</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">RUNTIME GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RuntimeKernelDashboard />
        <KernelStateBoard />
        <RuntimeHealthCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlatformServiceRegistry />
        <ClusterTopologyDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ExecutionContextCenter />
        <DistributedExecutionDashboard />
        <DependencyMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RuntimeLifecycleCenter />
        <HeartbeatDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RuntimeDiagnosticsCenter />
        <PlatformCapabilityRegistry />
        <RuntimeConfigurationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RuntimeCompatibilityMatrix />
        <ExecutionEvidenceLedger />
      </div>
    </div>
  );
}
