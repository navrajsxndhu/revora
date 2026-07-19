import React from 'react';
import { EnterpriseTelemetryCenter } from "@/components/mission-control/observability/enterprise-telemetry-center";
import { MetricsRegistryDashboard } from "@/components/mission-control/observability/metrics-registry-dashboard";
import { DistributedTraceCenter } from "@/components/mission-control/observability/distributed-trace-center";
import { StructuredLoggingDashboard } from "@/components/mission-control/observability/structured-logging-dashboard";
import { RuntimeHealthCenter } from "@/components/mission-control/observability/runtime-health-center";
import { HeartbeatOperationsDashboard } from "@/components/mission-control/observability/heartbeat-operations-dashboard";
import { AlertGovernanceCenter } from "@/components/mission-control/observability/alert-governance-center";
import { ExceptionOperationsCenter } from "@/components/mission-control/observability/exception-operations-center";
import { DiagnosticSnapshotCenter } from "@/components/mission-control/observability/diagnostic-snapshot-center";
import { PerformanceMeasurementDashboard } from "@/components/mission-control/observability/performance-measurement-dashboard";
import { InstrumentationMatrix } from "@/components/mission-control/observability/instrumentation-matrix";
import { ServiceHealthBoard } from "@/components/mission-control/observability/service-health-board";
import { ObservabilityEvidenceLedger } from "@/components/mission-control/observability/observability-evidence-ledger";
import { MonitoringOperationsCenter } from "@/components/mission-control/observability/monitoring-operations-center";
import { ConstitutionalTelemetryDashboard } from "@/components/mission-control/observability/constitutional-telemetry-dashboard";

export default function ObservabilityGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Observability & Diagnostics Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing telemetry, logs, traces, and metrics</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">OBSERVABILITY GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnterpriseTelemetryCenter />
        <MetricsRegistryDashboard />
        <DistributedTraceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StructuredLoggingDashboard />
        <RuntimeHealthCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <HeartbeatOperationsDashboard />
        <AlertGovernanceCenter />
        <ExceptionOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DiagnosticSnapshotCenter />
        <PerformanceMeasurementDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <InstrumentationMatrix />
        <ServiceHealthBoard />
        <ObservabilityEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonitoringOperationsCenter />
        <ConstitutionalTelemetryDashboard />
      </div>
    </div>
  );
}
